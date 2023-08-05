import { Page, Locator, expect } from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly signInButton: Locator
    readonly searchItem: Locator
    
    constructor(page: Page) {
        this.page = page
        this.signInButton = page.getByRole('link', { name: ' My Account' })
        this.searchItem = page.getByRole('textbox', { name: 'Search For Products' })
    }

    async visit() {
        await this.page.goto('http://opencart.abstracta.us/index.php?route=common/home')
        //await this.page.pause()
    }

    async clickOnSignIn() {
        await this.signInButton.click()
        //await this.page.pause()
    }

    async searchFor(phrase: string) {
        await this.searchItem.click()
        await this.searchItem.fill(phrase)
        await this.page.keyboard.press('Enter')
    }
}