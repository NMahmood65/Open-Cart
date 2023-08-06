/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test, expect } from '@playwright/test';

test('full page snapshot', async ({ page }) => {
    await page.goto('https://www.example.com')
    await expect(await page.screenshot()).toMatchSnapshot('homepage.png')
})

test('single element snapshot', async ({ page }) => {
    await page.goto('https://www.example.com')
    const pageh1 = await page.$('h1')
    await expect(await pageh1.screenshot()).toMatchSnapshot('page-title.png')
})



