import { BasePage } from './base.page';
export class LikePage extends BasePage {
    constructor(page) {
        super(page);
        this.link = page.getByRole('button', { name: 'Global Feed' });
        this.like = page.getByRole('button', { name: '0' }).first();
        this.checkLike = page.locator('button:has-text("( 1 )")').first();
    }

    async gotoLike() {   
        await this.link.click();
        await this.like.click();
    }
}