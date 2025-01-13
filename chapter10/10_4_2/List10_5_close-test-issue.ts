import dotenv from 'dotenv'
import { graphql } from '@octokit/graphql'

// GitHubのトークンを環境変数から取得して認証設定する
dotenv.config()
const gql = graphql.defaults({
  headers: {
    authorization: `token ${process.env['GITHUB_TOKEN']}`,
  },
})

// プロジェクトのノードIDを取得する
const project: { organization: { projectV2: { id: string } } } = await gql({
  query: `
    query {
      organization(login: "${process.env['PROJECT_ORG_NAME']}") {
        projectV2(number: ${process.env['PROJECT_NUMBER']}) {id}
      }
    }
  `,
})
const projectId = project.organization.projectV2.id

// プロジェクト内のアイテムを全て取得する
const getProjectItems = async (endCursor?: string, items: {[key: string]: string} =
{}) => {
  const projectDetail: {
    node: { items: { nodes: { type: string, content: { title: string, id: string } }
[], pageInfo: { hasNextPage: string, endCursor: string } } } } = await gql({
    query: `
      query{
        node(id: "${projectId}") {
          ... on ProjectV2 {
            title
            url
            items(first: 20 ${endCursor ? `after: "${endCursor}"` : ''}) {
              nodes {
                type
                content {
                  ... on Issue {
                    id
                    title
                  }
                }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
            }
          }
        }
      }
    `,
  })
  const fetchedItems = projectDetail.node.items
  const projectItems = {
    ...items,
    ...fetchedItems.nodes.reduce((merged, issue) => {
      return {
        ...merged,
        [issue.content.title]: issue.content.id,
      }
    }, {})
  }
  if (!fetchedItems.pageInfo.hasNextPage) return projectItems
  return getProjectItems(fetchedItems.pageInfo.endCursor, projectItems)
}

const projectItems = await getProjectItems()

// keyに対応するアイテムをクローズする
export const makeTestScenario = async (key: string, actions: () => void) => {
  await actions()
  if (!projectItems[key]) return
  gql({
    query: `
      mutation{
        updateIssue(input: {
          id: "${projectItems[key]}",
          state: CLOSED,
        }) {issue {id}}
      }
    `
  })
}