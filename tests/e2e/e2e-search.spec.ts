import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'

test.describe('search results', () => {
    test('should have search results', async ({page}) => {
        let homePage:HomePage
        homePage = new HomePage(page)
        await homePage.visit()
        await page.getByRole('textbox', { name: 'Search For Products' }).click();
        await page.getByRole('textbox', { name: 'Search For Products' }).fill('iphone');
        await page.getByRole('button', { name: 'Search' }).click();
        const searchTitle = await page.getByRole('heading', { name: 'Search - iphone' })
        //await page.pause()
        await expect(searchTitle).toBeVisible()
        //await page.pause()
        await page.screenshot({path:'screenshots/e2e-search.png'})
    })
})