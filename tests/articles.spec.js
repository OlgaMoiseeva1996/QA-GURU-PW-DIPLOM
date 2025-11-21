import { expect } from '@playwright/test';
import { test } from '../src/fixtures/index';

test.describe('Тесты статей @ui', () => {
    
    test('Пользователь создает статью @ui', async ({ app, testDataUi }) => {
        // Arrange - подготовка данных
        const { user, article } = testDataUi;

        // Act - выполнение действия
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.article.create(article);
        
        // Assert - проверка результата
        await expect(app.article.checkArticleTitleInput).toContainText(article.articleName);
        await expect(app.article.checkArticleInput).toContainText(article.description);
        await expect(app.article.checkTagsInput).toContainText(article.tags);
    });

    test('Пользователь редактирует статью @ui', async ({ app, testDataUi }) => {
        // Arrange - подготовка данных
        const { user, article, editarticle } = testDataUi;
        
        // Act - выполнение действия
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.article.create(article);
        await app.article.edit(editarticle);
        
        // Assert - проверка результата
        await expect(app.article.checkArticleTitleInput).toContainText(editarticle.articleName);
        await expect(app.article.checkArticleInput).toContainText(editarticle.description);  
    });

    test('Пользователь лайкает статью @ui', async ({ app, testDataUi }) => {
        // Arrange - подготовка данных
        const { user } = testDataUi;
        
        // Act - выполнение действия
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.like.gotoLike();

        // Assert - проверка результата
        await expect(app.like.checkLike).toBeVisible();
    });
});