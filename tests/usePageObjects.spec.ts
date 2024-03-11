import {test, expect} from '@playwright/test'
import {HeaderNavigationPage} from '../page-objects/headerNavigationPage'

test.beforeEach(async({page}) => {
    await page.goto("https://playwright.dev/")
})

test('navigate to docs page', async({page}) => {
    const navigateToDocs = new HeaderNavigationPage(page)
    await navigateToDocs.docsPage()
})