// This file contains locators and navigations for Contact Us page
import type {Locator, Page} from '@playwright/test';
import { getUrl } from "../utils/utils";

export class ContactUsPage {
    readonly page: Page;
    readonly contactUsPageUrl: string;
    readonly contactUsPageHeader: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly messageInput: Locator;
    readonly sendButton: Locator;
    readonly recaptchaErrorMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.contactUsPageUrl = getUrl('contact-us/');
        this.contactUsPageHeader = page.locator('h1.heading_title');
        this.nameInput = page.getByLabel(' Your Name*');
        this.emailInput = page.getByLabel(' Your Email*');
        this.messageInput = page.getByLabel(' Your Message*');
        this.sendButton = page.getByRole('button', { name: 'Send' }); // actually it has type input, but anyway playwright will recognize it correct
        this.recaptchaErrorMessage = page.locator('//span[text()="Please verify that you are not a robot."]');
    }

    // This navigates to Contact Us page
    async open(){
        await this.page.goto(this.contactUsPageUrl);
    }
}