// This file contains general-purpose utility functions
import {Locator, Page} from "@playwright/test";

// This function is a URL constructor
export function getUrl(path: string) {
    return `/${path}`;
}

// This function gets the all page text
export async function getPageText(page: Page): Promise<string | null> {
    return await page.textContent('body');
}

// This function checks if any of the locators are visible and returns true if so
export async function isAnyVisible(...locators: Locator[]): Promise<boolean> {
    for (const locator of locators) {
        if (await locator.isVisible()) {
            return true;
        }
    }
    return false;
}