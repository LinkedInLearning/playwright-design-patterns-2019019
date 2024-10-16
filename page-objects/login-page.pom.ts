import { Locator, Page } from '@playwright/test'

export class LoginPage {
  public readonly emailLocator: Locator
  public readonly passwordLocator: Locator
  public readonly signInButtonLocator: Locator

  constructor(page: Page) {
    this.emailLocator = page.getByRole('textbox', { name: 'Email' })
    this.passwordLocator = page.getByRole('textbox', { name: 'Password' })
    this.signInButtonLocator = page.getByRole('button', {name: 'Sign in'})
  }
}