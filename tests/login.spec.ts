import { test, expect } from "@playwright/test"
import loginData from "../data/loginData.json"

loginData.forEach(({ email, password }) => {
  test(`User can login with Email ${email}`, async ({ page }) => {
    await page.goto("https://binaryville.com/account/")

    await page.getByRole("textbox", { name: "Email" }).fill(email)
    await page.getByRole("textbox", { name: "Password" }).fill(password)
    await page.getByRole("button", { name: "Sign In" }).click()

    await expect(page).toHaveURL(new RegExp(password))
  })
})