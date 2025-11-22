import { BasePage } from './base.page';

export class RegisterPage extends BasePage {
    constructor(page) {
        super(page);
        this.nameInput = page.getByRole('textbox', { name: 'Your Name' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    }

    async register(user) {
        const { name, email, password } = user;
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signUpButton.click();
        return { name, email, password };
    }
}