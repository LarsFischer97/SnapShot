import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/SnapShot#/SnapScout/search/');
});

const SEARCH_ITEMS = [
  'Island',
  'Field',
  'Japan'
];

test('new search', async ({ page }) => {
  
  //Create 1st todo.
  await page.locator('input[name=search]').fill(SEARCH_ITEMS[0])
  await page.locator('input[name=search]').press('Enter')
  
  await expect(page.locator('text=Images'), 'Island Images').toBeVisible()

  //Create 2nd todo.
  await page.locator('input[name=search]').fill(SEARCH_ITEMS[1])
  await page.locator('input[name=search]').press('Enter')
  
  await expect(page.locator('text=Images'), 'Field Images').toBeVisible()
});

test('automated test', async ({ page }) => {
  // Click [placeholder="Search\.\.\."]
  await page.locator('[placeholder="Search\\.\\.\\."]').click();
  // Fill [placeholder="Search\.\.\."]
  await page.locator('[placeholder="Search\\.\\.\\."]').fill('Field');
  // Click button
  await page.locator('button').click();
  await expect(page).toHaveURL('http://localhost:3000/SnapShot#/SnapScout/search/Field');
  // Click text=Field Images
  await page.locator('text=Field Images').click();
  // Click text=Beaches
  await page.locator('text=Beaches').click();
  await expect(page).toHaveURL('http://localhost:3000/SnapShot#/SnapScout/beaches');
});
