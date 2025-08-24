/**
 * This file contains UI tests for filling out the contact form and reCAPTCHA
 */
import { test, expect } from "@playwright/test";
import { ContactUsPage } from "../pages/contact-us-page";

test.describe('Contact form and reCAPTCHA', () => {
    let contactUsPage: ContactUsPage;

    // This opens Contact Us page before each test
    test.beforeEach(async ({page}) => {
        contactUsPage = new ContactUsPage(page);
        await contactUsPage.open();

        // Here we first need to wait until form is fully loaded and API response returns 200 code
        await page.waitForResponse(response =>
            response.url().includes('/6492/feedback/schema') && response.status() === 200);
    });

    test('Contact form can be filled', async () => {
        await contactUsPage.nameInput.fill('Иван Иванов');
        await expect(contactUsPage.nameInput).toHaveValue('Иван Иванов');
        await contactUsPage.emailInput.fill('office@leadconsult.eu');
        await expect(contactUsPage.emailInput).toHaveValue('office@leadconsult.eu');
        await contactUsPage.messageInput.fill('test message');
        await expect(contactUsPage.messageInput).toHaveValue('test message');
    });

    // For that particular case we first should use .focus() action before entering data
    // for each form field, otherwise test is flaky on "chromium" browser
    test('Error message appears when reCAPTCHA is missing', async () => {
        await contactUsPage.nameInput.focus()
        await contactUsPage.nameInput.fill('Иван Иванов');
        await contactUsPage.emailInput.focus()
        await contactUsPage.emailInput.fill('office@leadconsult.eu');
        await contactUsPage.messageInput.focus()
        await contactUsPage.messageInput.fill('test message');
        await contactUsPage.sendButton.click();
        await expect(contactUsPage.recaptchaErrorMessage).toBeVisible();
    });
});
