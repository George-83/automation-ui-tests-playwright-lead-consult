/* This file contains UI test for checking that Contact Us page contains at least one of the elements:
 "Your email" field
 "Your Message" field
 "Send" button */
import { test, expect } from "@playwright/test";
import { ContactUsPage } from "../pages/contactUsPage";
import { isAnyVisible } from "../utils/utils";

test('Contact Us page has at least one required element', async ({page}) => {
    let contactUsPage: ContactUsPage;
    contactUsPage = new ContactUsPage(page);
    await contactUsPage.open();
    const isVisible = await isAnyVisible(
        contactUsPage.emailInput,
        contactUsPage.messageInput,
        contactUsPage.sendButton
    );

    expect(isVisible).toBe(true);
});

