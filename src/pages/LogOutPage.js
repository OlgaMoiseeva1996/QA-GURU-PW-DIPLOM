import { BasePage } from './base.page';
export class LogOutPage extends BasePage {
    constructor(page) {
        super(page);
        this.userDropdown = page.locator('div.nav-link.dropdown-toggle.cursor-pointer');
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.loginLink = page.getByRole('link', { name: 'Login' });
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutLink.click();
    }
}