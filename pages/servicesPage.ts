// This file contains locators and navigations for Services page
import type {Locator, Page} from '@playwright/test';
import { getUrl } from "../utils/utils";

export class ServicesPage {
    readonly page: Page;
    readonly servicesPageUrl: string;
    readonly ourServicesPageHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.servicesPageUrl = getUrl('services/');
        this.ourServicesPageHeader = page.locator('h1.heading_title');
    }

    // This navigates to Services page
    async open(){
        await this.page.goto(this.servicesPageUrl);
    }
}