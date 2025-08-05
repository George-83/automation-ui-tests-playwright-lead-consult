/**
 * This file contains UI test for checking that About Us page contains words "team" or "consulting"
 */
import { test, expect } from "@playwright/test";
import { AboutUsPage } from "../pages/aboutUsPage";
import { getPageText } from "../utils/utils";


test('About Us page contains words "team" or "consulting', async ({page}) => {
    const aboutUsPage = new AboutUsPage(page);
    await aboutUsPage.open();
    const text = await getPageText(page);
    expect(text).toMatch(/team|consulting/i);
});