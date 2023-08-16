import { test, expect } from '@playwright/test';

test('delete items', async ({ page }) => {
  await page.goto('http://opencart.abstracta.us/index.php?route=common/home');
  await page.getByRole('link', { name: 'Tablets' }).click();
  await page.getByRole('button', { name: ' Add to Cart' }).click();
  await page.getByRole('link', { name: 'Software', exact: true }).click();
  await page.getByRole('link', { name: 'Cameras', exact: true }).click();
  await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
  await page.getByRole('button', { name: ' 2 item(s) - $339.99' }).click();
  await page.getByRole('row', { name: 'Samsung Galaxy Tab 10.1 Samsung Galaxy Tab 10.1 x 1 $241.99 ' }).getByTitle('Remove').click();
  await page.getByRole('button', { name: ' 1 item(s) - $98.00' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: ' 0 item(s) - $0.00' }).click();
  const checkempty = page.getByText('Your shopping cart is empty!')
  await expect(checkempty).toBeVisible()
  await page.screenshot({path:'screenshots/emptycart.png'})
});