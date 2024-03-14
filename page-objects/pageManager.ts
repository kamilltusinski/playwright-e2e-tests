import { Page, expect } from "@playwright/test"
import {HeaderNavigationPage} from '../page-objects/headerNavigationPage'

export class PageManager {

    private readonly page: Page
    private readonly headerNavigatonPage: HeaderNavigationPage

    constructor(page: Page){
        this.page = page
        this.headerNavigatonPage = new HeaderNavigationPage(this.page)
    }

    navigateTo(){ 
        return this.headerNavigatonPage
    }
}