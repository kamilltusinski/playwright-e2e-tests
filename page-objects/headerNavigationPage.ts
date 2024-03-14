import { Page } from "@playwright/test";
import { Helper } from "./helper";

export class HeaderNavigationPage extends Helper {

    constructor(page: Page) {
        super(page)
    }

    async docsPage() {
        await this.page.locator('.navbar__item').getByText("Docs").click()
        await this.waitForNumberOfSeconds(2)

    }

    async langaugeButtonPage() {
        await this.page.locator('.navbar__item').getByRole('button').click()
        await this.page.locator('.navbar__item').getByText('Java').click()

    }
}