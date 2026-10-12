const { test, expect } = require('@playwright/test');

test('Login exitoso en Sauce Demo', async ({ page }) => {
  // Navegar a la web
  await page.goto('/');

  // Ingresar credenciales
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click en Login
  await page.click('#login-button');

  // Validar que entramos a la página de productos
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});
