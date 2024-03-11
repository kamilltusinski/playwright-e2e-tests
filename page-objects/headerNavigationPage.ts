import { Page } from "@playwright/test";

export class HeaderNavigationPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async docsPage() {
        await this.page.locator('.navbar__item').getByText("Docs").click()

    }
}