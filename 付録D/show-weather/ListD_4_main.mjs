import { chromium } from 'playwright'
import { Command } from 'commander'

async function dumpWeather(prefecture, region) {
    const browser = await chromium.launch({
        headless: true, // falseのままだとブラウザが表示される
    })
    const context = await browser.newContext()
    context.setExtraHTTPHeaders({
        from: 'usenamer@example.com'  // 利用者の名前を入れること
    })
    const page = await context.newPage()

    // ここにコードを書いていく

    await context.close()
    await browser.close()
}

async function main() {
    const program = new Command()
    program
        .description('天気予報スクレイピング')
        .argument('<prefecture>', '都道府県')
        .argument('<region>', '地域')
        .parse()
    const [prefecture, region] =program.args
    await dumpWeather(prefecture, region)
}

await main()