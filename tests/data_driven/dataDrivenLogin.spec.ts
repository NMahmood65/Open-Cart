import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage} from '../../page-objects/HomePage'
import * as logindata from '../../login_data.json'

test.describe('data-driven login combinations', () => {
    let loginPage:LoginPage
    let homePage: HomePage
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page) 
        homePage = new HomePage(page)
        await homePage.visit()
        await homePage.clickOnSignIn()
    })

    test('email blank, password blank', async ({page}) => {
        await loginPage.login(logindata[0].username, logindata[0].password)
        await page.screenshot({path:'screenshots/blank-blank.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email blank, password invalid', async ({page}) => {
        await loginPage.login(logindata[1].username, logindata[1].password)
        await page.screenshot({path:'screenshots/blank-invalid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email blank, password valid', async ({page}) => {
        await loginPage.login(logindata[2].username, logindata[2].password)
        await page.screenshot({path:'screenshots/blank-valid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email invalid, password blank', async ({page}) => {
        await loginPage.login(logindata[3].username, logindata[3].password)
        await page.screenshot({path:'screenshots/invalid-blank.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email invalid, password invalid', async ({page}) => {
        await loginPage.login(logindata[4].username, logindata[4].password)
        await page.screenshot({path:'screenshots/invalid-invalid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email invalid, password valid', async ({page}) => {
        await loginPage.login(logindata[5].username, logindata[5].password)
        await page.screenshot({path:'screenshots/invalid-valid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email valid, password blank', async ({page}) => {
        await loginPage.login(logindata[6].username, logindata[6].password)
        await page.screenshot({path:'screenshots/valid-blank.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test('email valid, password invalid', async ({page}) => {
        await loginPage.login(logindata[7].username, logindata[7].password)
        await page.screenshot({path:'screenshots/valid-invalid.png'})
        //await page.pause()
        await loginPage.assertErrorMessage()
    })

    test.only('email valid, password valid', async ({page}) => {
        await loginPage.login(logindata[8].username, logindata[8].password)
        await page.screenshot({path:'screenshots/valid-valid2.png'})
        //await page.pause()
        await loginPage.assertSuccessLogin()
    })
   
})
