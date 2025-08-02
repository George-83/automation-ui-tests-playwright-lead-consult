// This file contains locators and navigations for Core Values And Vision page
import type {Locator, Page} from '@playwright/test';
import { getUrl } from "../utils/utils";

export class CoreValuesAndVisionPage {
    readonly page: Page;
    readonly coreValuesAndVisionPageUrl: string;
    readonly coreValuesAndVisionPageHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.coreValuesAndVisionPageUrl = getUrl('about-us/');
        this.coreValuesAndVisionPageHeader = page.locator('h1.heading_title');
    }
}