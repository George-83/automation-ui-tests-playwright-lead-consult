/**
 * This file contains locators for Core Values And Vision page
 */
import type { Locator, Page } from '@playwright/test';

export class CoreValuesAndVisionPage {
    readonly page: Page;
    readonly coreValuesAndVisionPageHeader: Locator;


    constructor(page: Page) {
        this.page = page;
        this.coreValuesAndVisionPageHeader = page.locator('h1.heading_title');
    }
}