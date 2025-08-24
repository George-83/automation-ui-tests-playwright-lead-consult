# WEB UI Test Project №2

This project provides automated tests for the public web site [https://www.leadconsult.eu](https://www.leadconsult.eu/), built using **TypeScript** and the **Playwright** framework.

## 📁 Project Structure

<pre>
📁 project-root/
│
├── 📁 pages/                      # Page Object Model (POM). Contains locators and navigations for pages
│   ├── about-us-page.ts
│   ├── contact-us-page.ts
│   ├── core-values-and-vision-page.ts
│   ├── home-page.ts
│   └── services-page.ts
│
├── 📁 tests/                      # Test modules organized by scenarios
│   ├── about-us.spec.ts
│   ├── contact-us.spec.ts
│   ├── form-and-recaptcha.spec.ts
│   └── header-buttons.spec.ts
│
├── 📁 utils/                      # General-purpose utility functions
│   └── utils.ts
│
├── playwright.config.ts           # Playwright configurations
└── tsconfig.json                  # TypeScript settings
</pre>

## ⚙️ Requirements

- TypeScript
- [Playwright](https://playwright.dev/)


## 🚀 How to Run Tests
```npx playwright test```

## ✅ Features Covered
1. Navigation buttons:
    * "About Us" button hover
    * "Services" button click
    * "Home" button click
    * "Contact Us" button click
    * "Our Company" button click
    * "Core Values And Vision" button click
2. "About Us" page contains words "team" or "consulting
3. "Contact Us" page contains at least one contact form element
4. Contact form and reCAPTCHA:
   * Contact form can be filled
   * Error message appears when reCAPTCHA is missing

## 📝 Notes
* baseURL is defined in playwright.config.ts and shared across tests
* Tests are configured to be run on "chromium", "firefox" and "webkit" browsers
* "headless" mode is configured to "true"
* Project is designed to be scalable and extendable

## 👤 Author - Georgi Bordukov, Senior Software QA Engineer
* LinkedIn profile - https://www.linkedin.com/in/george-bordukov/
* This project was developed as part of a technical assessment for a QA position, using TypeScript and Playwright