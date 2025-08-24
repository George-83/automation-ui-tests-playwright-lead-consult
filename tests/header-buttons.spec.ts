/**
 * This file contains UI tests for header navigation buttons
 */
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { AboutUsPage } from "../pages/about-us-page";
import { CoreValuesAndVisionPage } from "../pages/core-values-and-vision-page";
import { ServicesPage } from "../pages/services-page";
import { ContactUsPage } from "../pages/contact-us-page";

test.describe('Header navigation buttons', () => {
    let homePage: HomePage;
    let aboutUsPage: AboutUsPage;
    let coreValuesAndVisionPage: CoreValuesAndVisionPage;
    let servicesPage: ServicesPage;
    let contactUsPage: ContactUsPage;

    // This opens Home page before each test
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.open();
    });

    test('About Us button has a list', async () => {
        await homePage.aboutUsButton.hover();
        await expect(homePage.ourCompanyButton).toBeVisible();
        await expect(homePage.coreValuesAndVisionButton).toBeVisible();
    });

    test('Services button', async ({page}) => {
        servicesPage = new ServicesPage(page);
        await homePage.servicesButton.click();
        await expect(page).toHaveURL('services/');
        await expect(servicesPage.ourServicesPageHeader).toContainText(/services/i);
    });

    test('Home button', async ({page}) => {
        servicesPage = new ServicesPage(page);
        await servicesPage.open();
        await homePage.homeButton.click();
        await expect(page).toHaveURL('/');
        await expect(homePage.homePageHeader).toContainText(/lead/i);
    });

    test('Contact Us button', async ({page}) => {
        contactUsPage = new ContactUsPage(page);
        await homePage.contactUsButton.click();
        await expect(page).toHaveURL('contact-us/');
        await expect(contactUsPage.contactUsPageHeader).toContainText(/contact/i);
    });

    test('Our Company button', async ({page}) => {
        aboutUsPage = new AboutUsPage(page);
        await homePage.aboutUsButton.hover();
        await homePage.ourCompanyButton.click();
        await expect(page).toHaveURL('about-us/');
        await expect(aboutUsPage.aboutUsPageHeader).toContainText(/about/i);
    });

    test('Core Values And Vision button', async ({page}) => {
        coreValuesAndVisionPage = new CoreValuesAndVisionPage(page);
        await homePage.aboutUsButton.hover();
        await homePage.coreValuesAndVisionButton.click();
        await expect(page).toHaveURL('core-values-and-vision/');
        await expect(coreValuesAndVisionPage.coreValuesAndVisionPageHeader).toContainText(/values/i);
    });
});