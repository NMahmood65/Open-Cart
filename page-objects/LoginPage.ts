import { Page, Locator, expect } from '@playwright/test'

export class LoginPage {
    readonly page: Page
    readonly loginButton: Locator
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly loginForm: Locator
    readonly SuccessfulLogin: Locator

    constructor(page: Page) {
        this.page = page
        this.loginButton = page.getByRole('link', { name: 'Login' })
        this.emailInput = page.getByPlaceholder('E-Mail Address')
        this.passwordInput = page.getByPlaceholder('Password')
        this.submitButton = page.getByRole('button', { name: 'Login' })
        this.errorMessage = page.getByText('Warning: No match for E-Mail Address and/or Password.')
        this.SuccessfulLogin = page.locator('#content').getByRole('heading', { name: 'My Account' })
    }

    async login(username: string, password: string) {
        await this.loginButton.click()
        await this.emailInput.click()
        await this.emailInput.fill(username)
        await this.passwordInput.click()
        await this.passwordInput.fill(password)
        await this.submitButton.click()
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toBeVisible()
    }

    async assertSuccessLogin() {
        await expect(this.SuccessfulLogin).toContainText('My Account')
    }

    // async snapshotLoginForm() {
    //     const loginForm = await this.submitButton.click()
    //     await expect(this.loginForm.screenshot()).toMatchSnapshot('login-form.png')
    // }

    // async snapshotErrorMessage() {
    //     await expect(this.errorMessage.screenshot()).toMatchSnapshot('login-error.png')
    // }
}