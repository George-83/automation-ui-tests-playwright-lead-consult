/**
 * This file contains UI test for checking that Contact Us page contains at least one of the elements:
 * "Your email" field
 *  "Your Message" field
 *  "Send" button
 */
import { test, expect } from "@playwright/test";
import { ContactUsPage } from "../pages/contactUsPage";

test('At least one contact form element is visible', async ({page}) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.open();
    await expect(
        contactUsPage.emailInput
            .or(contactUsPage.messageInput)
            .or(contactUsPage.sendButton)
            .first()
    ).toBeVisible();
});

