import { BasePage } from './base.page';
export class MainPage extends BasePage {
    constructor(page) {
        super(page);

        this.signupLink = page.getByRole('link', { name: 'Sign up' });
        this.loginLink = page.getByRole('link', { name: 'Login' });
    }

    async gotoRegister() {
        await this.signupLink.click();
    }
}