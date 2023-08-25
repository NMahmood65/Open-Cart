import { test } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage} from '../../page-objects/HomePage'
import * as logindata from '../../tests/data_driven/login_data.json'

test.describe('json-driven login combinations', () => {
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
        await page.screenshot({path:'screenshots/json/blank-blank.png'})
        await loginPage.assertErrorMessage()
        await page.pause()
    })

    test('email blank, password invalid', async ({page}) => {
        await loginPage.login(logindata[1].username, logindata[1].password)
        await page.screenshot({path:'screenshots/json/blank-invalid.png'})
        await loginPage.assertErrorMessage()
        await page.pause()
    })

    test('email blank, password valid', async ({page}) => {
        await loginPage.login(logindata[2].username, logindata[2].password)
        await page.screenshot({path:'screenshots/json/blank-valid.png'})
        await loginPage.assertErrorMessage()
        await page.pause()
    })

    test('email invalid, password blank', async ({page}) => {
        await loginPage.login(logindata[3].username, logindata[3].password)
        await page.screenshot({path:'screenshots/json/invalid-blank.png'})
        await loginPage.assertErrorMessage()
        await page.pause()
    })

    test('email invalid, password invalid', async ({page}) => {
        await loginPage.login(logindata[4].username, logindata[4].password)
        await page.screenshot({path:'screenshots/json/invalid-invalid.png'})
        await loginPage.assertErrorMessage()
        await page.pause()
    })

    test('email invalid, password valid', async ({page}) => {
        await loginPage.login(logindata[5].username, logindata[5].password)
        await page.screenshot({path:'screenshots/json/invalid-valid.png'})
        await loginPage.assertErrorMessage()
        await page.pause()
    })

    test('email valid, password blank', async ({page}) => {
        await loginPage.login(logindata[6].username, logindata[6].password)
        await page.screenshot({path:'screenshots/json/valid-blank.png'})
        await loginPage.assertErrorMessage()
        await page.pause()
    })

    test('email valid, password invalid', async ({page}) => {
        await loginPage.login(logindata[7].username, logindata[7].password)
        await page.screenshot({path:'screenshots/json/valid-invalid.png'})
        await loginPage.assertErrorMessage()
        await page.pause()
    })

    test.only('email valid, password valid', async ({page}) => {
        await loginPage.login(logindata[8].username, logindata[8].password)
        await page.screenshot({path:'screenshots/json/valid-valid.png'})
        await loginPage.assertSuccessLogin()
        await page.pause()
    })
   
})
