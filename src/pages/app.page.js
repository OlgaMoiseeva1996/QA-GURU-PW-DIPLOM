import { ArticlePage, LikePage, LogOutPage, MainPage, RegisterPage, TagsPage } from './index';

export class App {
    constructor(page) {
        this.page = page;
        this.article = new ArticlePage(page);
        this.like = new LikePage(page);
        this.logout = new LogOutPage(page);
        this.main = new MainPage(page);
        this.tags = new TagsPage(page);
        this.register = new RegisterPage(page);
    }
}