import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://opencart.abstracta.us/index.php?route=common/home');
  await page.getByRole('link', { name: ' My Account' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('nmahmood65@yahoo.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#content').getByRole('heading', { name: 'My Account' }).click();
});