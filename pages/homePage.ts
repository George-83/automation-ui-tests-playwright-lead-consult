// This file contains locators and navigations for Home page
import type {Locator, Page} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly aboutUsButton: Locator;
    readonly ourCompanyButton: Locator;
    readonly coreValuesAndVisionButton: Locator;
    readonly servicesButton: Locator;
    readonly contactUsButton: Locator;
    readonly homePageHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('li#menu-item-6360');
        this.aboutUsButton = page.locator('li#menu-item-5815');
        this.ourCompanyButton = page.locator('li#menu-item-7956');
        this.coreValuesAndVisionButton = page.locator('li#menu-item-7957');
        this.servicesButton = page.locator('li#menu-item-6363');
        this.contactUsButton = page.locator('li#menu-item-5819');
        this.homePageHeader = page.locator('h1.heading_title');
    }
    // This navigates to Home page. Base URL is defined in the playwright.config.ts file
    async open(){
        await this.page.goto('/');
    }
}