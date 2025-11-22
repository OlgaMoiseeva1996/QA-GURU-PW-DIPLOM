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
        
        // Assert - проверка на странице статьи
        await expect(app.article.checkArticle).toContainText(article.articleName);
        await expect(app.article.checkArticle).toContainText(article.description);
        await expect(app.article.checkArticle).toContainText(article.tags);

        // Act - переход в профиль
        await app.profile.gotoProfile();

        // Act - переход в профиль
        await expect(app.article.checkArticle).toContainText(article.shortDescription);
        await expect(app.article.checkArticle).toContainText(article.articleName);
        await expect(app.article.checkArticle).toContainText(article.tags);

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
        
        // Assert - проверка на странице статьи
        await expect(app.article.checkArticle).toContainText(editarticle.articleName);
        await expect(app.article.checkArticle).toContainText(editarticle.description);  
        await expect(app.article.checkArticle).toContainText(article.tags);

        // Act - переход в профиль
        await app.profile.gotoProfile();

        // Assert - проверка в профиле
        await expect(app.article.checkArticle).toContainText(editarticle.articleName);
        await expect(app.article.checkArticle).toContainText(editarticle.shortDescription);
        await expect(app.article.checkArticle).toContainText(article.tags);

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