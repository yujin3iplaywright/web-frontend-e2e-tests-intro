import type { Page, Locator } from '@playwright/test'

export class TodoPage {
    private readonly deleteButtons: Locator

    constructor(public readonly page: Page) {
        this.deleteButtons = this.page.getByRole('button', { name: 'x' })
    }

    async goto() {
        await this.page.goto('http://localhost:3000/')
    }

    async addTODOs(texts: string[]) {
        for (const text of texts) {
            await this.page.getByPlaceholder('TODOを入力').click()
            await this.page.getByPlaceholder('TODOを入力').fill(text)
            await this.page.getByRole('button', { name: '追加' }).click()
        }
    }

    async removeAll() {
        while ((await this.deleteButtons.count()) > 0) {
            await this.deleteButtons.first().click()
        }
    }
}