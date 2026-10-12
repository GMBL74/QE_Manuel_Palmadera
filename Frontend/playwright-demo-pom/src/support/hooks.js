const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(180 * 1000);

// El navegador solo se abre para los escenarios de interfaz (tag @ui)
Before({ tags: '@ui' }, async function () {

    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

});

After(async function (scenario) {

    console.log('Estado escenario:', scenario.result?.status);

    if (scenario.result?.status !== 'PASSED') {

        await this.page.screenshot({
            path: `test-results/error-${Date.now()}.png`,
            fullPage: true
        });

        console.log('Screenshot generado');
    }

    await this.browser.close();

});