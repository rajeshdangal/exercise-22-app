const { test, expect } = require('@playwright/test')

test('front page can be opened', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  await expect(page.getByText('Pokemon List')).toBeVisible({ timeout: 10000 })
})

test('pokemon list is displayed', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  await expect(page.getByRole('heading', { name: 'Pokemon List' })).toBeVisible({ timeout: 10000 })
  await page.waitForSelector('li a', { timeout: 10000 })
  const pokemonItems = await page.locator('li a').count()
  expect(pokemonItems).toBeGreaterThan(0)
})

test('can navigate to pokemon detail page', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  await page.waitForSelector('li a', { timeout: 10000 })
  const firstPokemon = await page.locator('li a').first()
  const pokemonName = await firstPokemon.textContent()
  await firstPokemon.click()
  await page.waitForLoadState('networkidle')
  await expect(page.getByRole('heading', { name: pokemonName })).toBeVisible({ timeout: 10000 })
})

test('can navigate between pokemon pages', async ({ page }) => {
  await page.goto('/pokemon/charizard')
  await page.waitForLoadState('networkidle')
  await expect(page.getByRole('heading', { name: 'charizard' })).toBeVisible({ timeout: 10000 })
  
  const nextLink = page.getByText('Next')
  if (await nextLink.isVisible()) {
    await nextLink.click()
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('heading')).not.toHaveText('charizard')
  }
})