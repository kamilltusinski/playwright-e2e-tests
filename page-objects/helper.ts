import { Page } from "@playwright/test"

export class Helper{
    readonly page : Page

    constructor(page: Page) {
        this.page = page
    }

    async waitForNumberOfSeconds(timeInSecond: number) {
        await this.page.waitForTimeout(timeInSecond * 1000)
    }
}