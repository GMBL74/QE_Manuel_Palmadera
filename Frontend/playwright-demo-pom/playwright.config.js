const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // ⏱️ Tiempo máximo por test
  timeout: 60_000, // 30 segundos por test

  // ⏱️ Tiempo máximo total del run
  globalTimeout: 5 * 60 * 1000, // 5 minutos

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,

    // ⏱️ Tiempos por acción y navegación
    actionTimeout: 30_000,       // 10s por acción (click, fill, etc.)
    navigationTimeout: 20_000,   // 15s para page.goto / navegación

    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});