import { expect } from '@playwright/test';
import { App } from '../src/pages/app.page';
import { test } from '../src/fixtures/index';

test.describe('Тест поиска по тегам @ui', () => {

    test('Пользователь ищет статьи по тегу @ui', async ({ page, testDataUi}) => {
        const { user } = testDataUi;

        let app = new App(page);
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.register(user);
        await app.tags.gotoSearch();
        
        await expect(app.tags.tag).toBeVisible();
    });
});