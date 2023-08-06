
import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe('Login page visual tests', () => {
    let homePage:HomePage
    let loginPage:LoginPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)

        homePage.visit()
        homePage.clickOnSignIn()
    })

    test('Login form', async ({ page }) => {
        await loginPage.snapshotLoginForm()
    })

    test('Login error message', async ({ page }) => {
        await loginPage.login('invalidusername', 'invalidpassword')
        await loginPage.snapshotErrorMessage()
    });
    
    
    

}

)

