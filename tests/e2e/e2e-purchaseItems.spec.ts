import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage} from '../../page-objects/HomePage'

let loginPage:LoginPage
let homePage: HomePage

test('login, select items to buy and pay', async ({ page }) => {
  loginPage = new LoginPage(page) 
  homePage = new HomePage(page)
  await homePage.visit()
  await homePage.clickOnSignIn()
  await loginPage.login('nmahmood65@yahoo.com', 'password')
  //select camera to buy, quantity and type and add to cart
  await page.getByRole('link', { name: 'Cameras' }).click()
  await page.getByRole('button', { name: ' Add to Cart' }).first().click()
  await page.getByLabel('Select').selectOption('15')
  await page.getByLabel('Qty').click()
  await page.getByLabel('Qty').fill('1')
  await page.getByRole('button', { name: 'Add to Cart' }).click()
  //confirm camera added to cart
  const cameraItem = page.getByText('Success: You have added Canon EOS 5D to your shopping cart!×')
  await expect(cameraItem).toBeVisible()

  //select the one tablet and add to cart
  await page.getByRole('link', { name: 'Tablets' }).click()
  await page.getByRole('button', { name: ' Add to Cart' }).click()
  //confirm tablet added to cart
  const tabletItem = page.getByText('Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart! ×')
  await expect(tabletItem).toBeVisible()

  await page.getByRole('button', { name: ' 2 item(s) - $339.99' }).click()
  await page.locator('#cart').getByRole('link', { name: ' Checkout' }).click()

  //confirm payment address
  await page.click('#button-payment-address')

  //confirm send-to address
  await page.click('#button-shipping-address')

  //confirm shipping method
  await page.click('#button-shipping-method')
  //accept terms and conditions
  await page.getByRole('checkbox').check()

  //confirm payment method
  await page.click('#button-payment-method')

  await page.getByRole('button', { name: 'Confirm Order' }).click()

  const orderSuccess = page.getByRole('heading', { name: 'Your order has been placed!' })
  await expect(orderSuccess).toBeVisible()

  await page.screenshot({path:'screenshots/e2e-orderplacement.png'})

})