import { test } from '@playwright/test';
const URL = 'https://realworld.qa.guru/';

export class BasePage {
    constructor(page) {
        this.page = page;
    }
    
    async open() {
        return test.step(`Переход на страницу {$URL}`, async (step) => {
            await this.page.goto(URL);
        });
    }
}