// This file contains general-purpose utility functions
import { Page } from "@playwright/test";

// This function is a URL constructor
export function getUrl(path: string) {
    return `/${path}`;
}

// This function gets all page text
export async function getPageText(page: Page): Promise<string | null> {
    return await page.textContent('body');
}