import { expect } from '@playwright/test';
import { App } from '../src/pages/app.page';
import { test } from '../src/fixtures/index';

test.describe('Тесты статей @ui', () => {
    
    test('Пользователь создает статью @ui', async ({ page, testDataUi }) => {
        const { user, article } = testDataUi;
        
        let app = new App(page);
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.article.create(article);
        
        await expect(app.article.checkArticleTitleInput).toContainText(article.articleName);
        await expect(app.article.checkArticleInput).toContainText(article.description);
        await expect(app.article.checkTagsInput).toContainText(article.tags);
    });

    test('Пользователь редактирует статью @ui', async ({ page, testDataUi}) => {
        const { user, article, editarticle } = testDataUi;
        
        let app = new App(page);
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.article.create(article);
        await app.article.edit(editarticle);
        
        await expect(app.article.checkArticleTitleInput).toContainText(editarticle.articleName);
        await expect(app.article.checkArticleInput).toContainText(editarticle.description);  
    });

    test('Пользователь лайкает статью @ui', async ({ page, testDataUi }) => {
        const { user } = testDataUi;
        
        let app = new App(page);
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.like.gotoLike();
        
        await expect(app.like.checkLike).toBeVisible();
    });
});