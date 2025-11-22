import { BasePage } from './base.page';
export class ArticlePage extends BasePage {
    constructor(page) {
        super(page);
        this.newArticleButton = page.getByRole('link', { name: 'New Article' });
        this.articleTitle = page.getByRole('textbox', { 
            name: 'Article Title' });
        this.articleShortDescription = page.getByRole('textbox', { 
            name: "What's this article about?" });
        this.articleDescription = page.getByRole('textbox', { 
            name: 'Write your article (in markdown)' });
        this.articleTags = page.getByRole('textbox', { 
            name: 'Enter tags' });
        this.publishButton = page.getByRole('button', { 
            name: 'Publish Article' });
        this.updateButton = page.getByRole('button', { 
            name: 'Update Article' });
        this.editArticleButton = page.getByRole('button', { 
            name: 'Edit Article' }).nth(1);
        this.checkArticle = page.getByRole('main');
        

    }

    async create(article) {    
        const { articleName, shortDescription, description, tags } = article;
        
        await this.newArticleButton.click();
        await this.articleTitle.click();
        await this.articleTitle.fill(articleName); 
        await this.articleShortDescription.click();
        await this.articleShortDescription.fill(shortDescription);
        await this.articleDescription.click();
        await this.articleDescription.fill(description);
        await this.articleTags.click();
        await this.articleTags.fill(tags);
        await this.publishButton.click();
    }

    async edit(editarticle) {    
        const { articleName, shortDescription, description } = editarticle;
        
        await this.editArticleButton.click();
        await this.articleTitle.click();
        await this.articleTitle.fill('');
        await this.articleTitle.fill(articleName); 
        await this.articleShortDescription.click();
        await this.articleShortDescription.fill('');
        await this.articleShortDescription.fill(shortDescription);
        await this.articleDescription.click();
        await this.articleDescription.fill('');
        await this.articleDescription.fill(description);
        await this.updateButton.click();
    }


}