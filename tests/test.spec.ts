import { test as base, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login-page.pom'

const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  }
})


test('should login using POM', async ({ page, loginPage }) => {
  await page.goto('https://binaryville.com/account/')

  await loginPage.emailLocator.fill('test@example.com')
  await loginPage.passwordLocator.fill('pass123')

  await loginPage.signInButtonLocator.click()

  expect(page.url()).toContain('pass123')
})