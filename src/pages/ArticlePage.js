import { BasePage } from './base.page';
export class ArticlePage extends BasePage {
    constructor(page) {
        super(page);
        this.newArticle = page.getByRole('link', { name: 'New Article' });
        this.articleTitleInput = page.getByRole('textbox', { 
            name: 'Article Title' });
        this.nameOfArticleInput = page.getByRole('textbox', { 
            name: "What's this article about?" });
        this.articleInput = page.getByRole('textbox', { 
            name: 'Write your article (in markdown)' });
        this.tagsInput = page.getByRole('textbox', { 
            name: 'Enter tags' });
        this.publishButton = page.getByRole('button', { 
            name: 'Publish Article' });
        this.updateButton = page.getByRole('button', { 
            name: 'Update Article' });
        this.buttonEditArticle = page.getByRole('button', { 
            name: 'Edit Article' }).nth(1);
        this.checkArticleTitleInput = page.getByRole('heading');
        this.checkArticleInput = page.getByRole('paragraph');
        this.checkTagsInput = page.getByRole('main');
    }

    async create(article) {    
        const { articleName, shortDescription, description, tags } = article;
        
        await this.newArticle.click();
        await this.articleTitleInput.click();
        await this.articleTitleInput.fill(articleName); 
        await this.nameOfArticleInput.click();
        await this.nameOfArticleInput.fill(shortDescription);
        await this.articleInput.click();
        await this.articleInput.fill(description);
        await this.tagsInput.click();
        await this.tagsInput.fill(tags);
        await this.publishButton.click();
    }

    async edit(editarticle) {    
        const { articleName, shortDescription, description, tags } = editarticle;
        
        await this.buttonEditArticle.click();
        await this.articleTitleInput.click();
        await this.articleTitleInput.fill('');
        await this.articleTitleInput.fill(articleName); 
        await this.nameOfArticleInput.click();
        await this.nameOfArticleInput.fill('');
        await this.nameOfArticleInput.fill(shortDescription);
        await this.articleInput.click();
        await this.articleInput.fill('');
        await this.articleInput.fill(description);
        await this.updateButton.click();
    }
}