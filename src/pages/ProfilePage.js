import { BasePage } from './base.page';
export class ProfilePage extends BasePage {
    constructor(page) {
        super(page);
        this.userDropdown = page.locator('div.nav-link.dropdown-toggle.cursor-pointer');
        this.profileLink = page.getByRole('link', { name: ' Profile' });
    }

    async gotoProfile() {
        await this.userDropdown.click();
        await this.profileLink.click();
    }
}