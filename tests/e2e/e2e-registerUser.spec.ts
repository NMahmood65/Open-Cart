import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'

test('New registration', async ({ page }) => {
  let homePage:HomePage
  homePage = new HomePage(page)

  await homePage.visit()
  await homePage.clickOnSignIn()
  
  await page.getByRole('link', { name: 'Register' }).click()
  await page.getByPlaceholder('First Name').click()
  await page.getByPlaceholder('First Name').fill('Naser')
  await page.getByPlaceholder('Last Name').click()
  await page.getByPlaceholder('Last Name').fill('Mahmood')
  await page.getByPlaceholder('E-Mail').click()
  await page.getByPlaceholder('E-Mail').fill('nmahmood65@yahoo.com')
  await page.getByPlaceholder('Telephone').click()
  await page.getByPlaceholder('Telephone').fill('07962230520')
  await page.getByPlaceholder('Password', { exact: true }).click()
  await page.getByPlaceholder('Password', { exact: true }).fill('password')
  await page.getByPlaceholder('Password Confirm').click()
  await page.getByPlaceholder('Password Confirm').fill('password')
  await page.getByRole('checkbox').check()
  await page.getByRole('button', { name: 'Continue' }).click()
  
  await homePage.assertSuccessRegister()

  await page.screenshot({path:'screenshots/e2e-register.png'})
})