import { expect } from '@playwright/test';
import { test } from '../src/fixtures/index';

test.describe('Тест поиска по тегам @ui', () => {

    test('Пользователь ищет статьи по тегу @ui', async ({ app, testDataUi }) => {
        // Arrange - подготовка данных
        const { user } = testDataUi;

        // Act - выполнение действия
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.tags.gotoSearch();
        
        // Assert - проверка результата
        await expect(app.tags.tag).toBeVisible();
    });
});