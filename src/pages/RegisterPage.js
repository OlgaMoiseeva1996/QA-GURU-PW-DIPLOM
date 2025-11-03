import { test } from '@playwright/test';
export class RegisterPage {
    constructor(page) {
        this.nameInput = page.getByRole('textbox', { name: 'Your Name' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    }

    async register(user) {
        return test.step(`Зарегистрироваться пользователем ${user.name} с email ${user.email} и паролем ${user.password}`, async (step) => {
            step.attach('Реквизиты доступа', {
                body: `${user.name} с email ${user.email} и паролем ${user.password}`,
                contentType: 'text/plain',
            });

            const { name, email, password } = user;
            await this.nameInput.click();
            await this.nameInput.fill(name);
            await this.emailInput.click();
            await this.emailInput.fill(email);
            await this.passwordInput.click();
            await this.passwordInput.fill(password);
            await this.signUpButton.click();
        });
    }
}