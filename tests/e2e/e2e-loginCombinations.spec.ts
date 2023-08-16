import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage} from '../../page-objects/HomePage'


test.describe('testing all login combinations', () => {
    let loginPage:LoginPage
    let homePage: HomePage
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page) 
        homePage = new HomePage(page)
        await homePage.visit()
        await homePage.clickOnSignIn()
    })

    test('email blank, password blank', async ({page}) => {
        await loginPage.login('', '')
        await page.screenshot({path:'screenshots/blank-blank.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email blank, password invalid', async ({page}) => {
        await loginPage.login('', 'ijveppk')
        await page.screenshot({path:'screenshots/blank-invalid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email blank, password valid', async ({page}) => {
        await loginPage.login('', 'password')
        await page.screenshot({path:'screenshots/blank-valid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email invalid, password blank', async ({page}) => {
        await loginPage.login('jwfdjvowoj', '')
        await page.screenshot({path:'screenshots/invalid-blank.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email invalid, password invalid', async ({page}) => {
        await loginPage.login('jwfdjvowoj', 'odoifgnvgj')
        await page.screenshot({path:'screenshots/invalid-invalid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email invalid, password valid', async ({page}) => {
        await loginPage.login('jwfdjvowoj', 'password')
        await page.screenshot({path:'screenshots/invalid-valid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email valid, password blank', async ({page}) => {
        await loginPage.login('nmahmood65@yahoo.com', '')
        await page.screenshot({path:'screenshots/valid-blank.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email valid, password invalid', async ({page}) => {
        await loginPage.login('nmahmood65@yahoo.com', 'odvnoemb')
        await page.screenshot({path:'screenshots/valid-invalid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email valid, password valid', async ({page}) => {
        await loginPage.login('nmahmood65@yahoo.com', 'password')
        await page.screenshot({path:'screenshots/valid-valid.png'})
        //await page.pause()
        await loginPage.assertSuccessLogin()
    })
   
})