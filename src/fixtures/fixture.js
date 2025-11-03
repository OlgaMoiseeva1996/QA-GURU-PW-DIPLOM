import { test as base } from "@playwright/test";
import { App } from "../pages/app.page";
import { Api } from "../services/api.service";
import { UserBuilder, ArticleBuilder, EditArticleBuilder } from "../helpers/builders/index";

export const test = base.extend({
  app: async ({ page }, use) => {
    let application = new App(page);
    await use(application);
  },
  
  api: async ({ request }, use) => {
    let api = new Api(request);
    await use(api);
  },
  
  testDataUi: async ({}, use) => {
    const user = new UserBuilder()
      .addEmail()
      .addName()
      .addPassword()
      .generate();
    
    const article = new ArticleBuilder()
      .addArticleName()
      .addShortDescription()
      .addDescription()
      .addTags()
      .generate();

    const editarticle = new EditArticleBuilder()
      .addEditArticleName()
      .addEditShortDescription()
      .addEditDescription()
      .addEditTags()
      .generate();

    await use({ user, article, editarticle });
  },
});