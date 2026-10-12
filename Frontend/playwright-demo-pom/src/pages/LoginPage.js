const config = require('../config');

class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = '#user-name';
        this.password = '#password';
        this.loginBtn = '#login-button';
    }

    async goTo() {
        await this.page.goto(config.baseUrl);
    }

    async login(user, pass) {
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginBtn);
    }

}

module.exports = LoginPage;