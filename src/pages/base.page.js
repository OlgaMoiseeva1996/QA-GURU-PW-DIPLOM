import { test } from '@playwright/test';

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        return test.step(`Переход на главную страницу`, async (step) => {
            await this.page.goto('/'); // ✅ Относительный путь, использует baseURL из конфига
        });
    }
}