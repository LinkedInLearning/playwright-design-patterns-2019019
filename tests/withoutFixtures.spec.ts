import { expect, test, chromium } from "@playwright/test";

test("Sign In button is visible without Fixtures", async () => {
	const browser = await chromium.launch();
	const page = await browser.newPage();

	await page.goto("https://binaryville.com/account");
	const signInButton = page.getByRole("button", { name: "Sign in" });
	await expect(signInButton).toBeVisible();

	await browser.close();
})