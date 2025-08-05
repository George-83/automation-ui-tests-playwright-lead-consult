/**
 * This file contains locators and navigations for About Us page
 */
import type { Locator, Page } from '@playwright/test';

export class AboutUsPage {
    readonly page: Page;
    readonly aboutUsPageHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.aboutUsPageHeader = page.locator('h1.heading_title');
    }

    // This navigates to About Us page
    async open(){
        await this.page.goto('about-us/');
    }
}