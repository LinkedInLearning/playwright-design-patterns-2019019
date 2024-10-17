import { Before, After } from "@cucumber/cucumber"
import { chromium, Page, Browser } from "@playwright/test"

let page: Page
let browser: Browser

Before(async () => {
  browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  page = await context.newPage()
})

After(async () => {
  await browser.close()
})

export {page}