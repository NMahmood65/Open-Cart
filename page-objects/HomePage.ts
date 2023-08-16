import { Page, Locator, expect } from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly signInButton: Locator
    readonly searchItem: Locator
    readonly successfulRegister:Locator
    
    constructor(page: Page) {
        this.page = page
        this.signInButton = page.getByRole('link', { name: ' My Account' })
        this.searchItem = page.getByRole('textbox', { name: 'Search For Products' })
        this.successfulRegister = page.getByText('Congratulations! Your new account has been successfully created!')
    }

    async visit() {
        await this.page.goto('http://opencart.abstracta.us/index.php?route=common/home')
        //await this.page.pause()
    }

    async clickOnSignIn() {
        await this.signInButton.click()
        //await this.page.pause()
    }

    async assertSuccessRegister() {
        await expect(this.successfulRegister).toBeVisible()
    }
}