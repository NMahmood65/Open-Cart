import { test } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import {parse} from 'csv-parse/sync'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage} from '../../page-objects/HomePage'

let valid_username = 'nmahmood65@yahoo.com'
let valid_password = 'password'

const login_data1 = parse(fs.readFileSync(path.join(__dirname, 'login_data.csv')),{
    columns: true,
    skip_empty_lines:true
})

test.describe('csv-driven login combinations', () => {
    let loginPage:LoginPage
    let homePage: HomePage

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page) 
        homePage = new HomePage(page)
        await homePage.visit()
        await homePage.clickOnSignIn()
    })

    for(const login of login_data1){
        test(`Test case: ${login.login_test}`, async ({page}) => {
            console.log(login.login_test, login.username, login.password)
            const filename = 'screenshots/csv/' + login.login_test + '.png'
            await loginPage.login(login.username, login.password)
            if (login.username == valid_username && login.password == valid_password){
                await page.screenshot({path:filename})
                loginPage.assertSuccessLogin()
            }
            else {
                await page.screenshot({path:filename})
                loginPage.assertErrorMessage()
            }
            await page.pause()
        })
    }
   
})
