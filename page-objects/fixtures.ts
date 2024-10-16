import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/login-page.pom";

export const test = base.extend<{ loginPage: LoginPage }>({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use(loginPage);
	},
});

export { expect }