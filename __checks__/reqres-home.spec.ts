import { test, expect } from '@playwright/test'

test('Example Homepage', async ({ page }) => {
    const response = await page.goto('http://www.example.com')
    expect(response?.status()).toBeLessThan(400)
    await expect(page).toHaveTitle(/Example Domain/)
    //await page.screenshot({ path: 'homepage.jpg' })
  })
