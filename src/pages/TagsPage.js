import { BasePage } from './base.page';
export class TagsPage extends BasePage {
    constructor(page) {
        super(page);
        this.linkGlobal = page.getByRole('button', { name: 'Global Feed' });
        this.link = page.getByRole('button', { name: 'реклама' });
        this.tag = page.locator(
            "li.tag-default.tag-pill.tag-outline:has-text('реклама')").first();
    }

    async gotoSearch() {   
        await this.linkGlobal.click();
        await this.link.click();
    }
}