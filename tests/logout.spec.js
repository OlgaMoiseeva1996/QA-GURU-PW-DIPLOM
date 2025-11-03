import { expect } from '@playwright/test';
import { App } from '../src/pages/app.page';
import { test } from '../src/fixtures/index';

test.describe('Тест выхода из аккаунта @ui', () => {

    test('Пользователь выходит из аккаунта @ui', async ({ page, testDataUi}) => {
        const { user } = testDataUi;

        let app = new App(page);
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.logout.logout();
        
        await expect(app.logout.loginLink).toBeVisible();
    });
});