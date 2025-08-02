// This file contains locators and navigations for Contact Us page
import type {Locator, Page} from '@playwright/test';
import { getUrl } from "../utils/utils";

export class ContactUsPage {
    readonly page: Page;
    readonly contactUsPageUrl: string;
    readonly contactUsPageHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.contactUsPageUrl = getUrl('contact-us/');
        this.contactUsPageHeader = page.locator('h1.heading_title');
    }

    // This navigates to Contact Us page
    async open(){
        await this.page.goto(this.contactUsPageUrl);
    }
}