import { expect } from '@playwright/test';
import { test } from '../src/fixtures/index';

test.describe('Тест выхода из аккаунта @ui', () => {

    test('Пользователь выходит из аккаунта @ui', async ({ app, testDataUi }) => {
        // Arrange - подготовка данных
        const { user } = testDataUi;

        // Act - выполнение действия
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.logout.logout();
        
        // Assert - проверка результата
        await expect(app.logout.loginLink).toBeVisible();
    });
});