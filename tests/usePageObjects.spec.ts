import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'


test.beforeEach(async({page}) => {
    await page.goto("https://playwright.dev/")
    
})

test('navigate to docs page', async({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo().docsPage()
    await pm.navigateTo().langaugeButtonPage()
})