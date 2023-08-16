import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage} from '../../page-objects/HomePage'

let loginPage:LoginPage
let homePage: HomePage

test.only('login, select items to buy and pay', async ({ page }) => {
  await page.goto('http://opencart.abstracta.us/index.php?route=common/home')
  loginPage = new LoginPage(page) 
  homePage = new HomePage(page)
  await homePage.visit()
  await homePage.clickOnSignIn()
  await loginPage.login('nmahmood65@yahoo.com', 'password')

  await page.getByRole('link', { name: 'Cameras' }).click()
  await page.getByRole('button', { name: ' Add to Cart' }).first().click()
  await page.getByLabel('Select').selectOption('15')
  await page.getByLabel('Qty').click()
  await page.getByLabel('Qty').fill('1')
  await page.getByRole('button', { name: 'Add to Cart' }).click()

  const cameraItem = page.getByText('Success: You have added Canon EOS 5D to your shopping cart!×')
  await expect(cameraItem).toBeVisible()


  await page.getByRole('link', { name: 'Tablets' }).click()
  await page.getByRole('button', { name: ' Add to Cart' }).click()

  const tabletItem = page.getByText('Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart! ×')
  await expect(tabletItem).toBeVisible()

  await page.getByRole('button', { name: ' 2 item(s) - $339.99' }).click()
  await page.locator('#cart').getByRole('link', { name: ' Checkout' }).click()

  //await page.getByRole('button', { name: 'Continue' }).click()
  await page.click('#button-payment-address')

  //await page.getByRole('button', { name: 'Continue' }).click()
  await page.click('#button-shipping-address')

  //await page.getByRole('button', { name: 'Continue' }).click()
  await page.click('#button-shipping-method')

  await page.getByRole('checkbox').check()

  //await page.getByRole('button', { name: 'Continue' }).click()
  await page.click('#button-payment-method')

  await page.getByRole('button', { name: 'Confirm Order' }).click()

  const orderSuccess = page.getByRole('heading', { name: 'Your order has been placed!' })
  await expect(orderSuccess).toBeVisible()

  await page.screenshot({path:'screenshots/e2e-orderplacement.png'})

})