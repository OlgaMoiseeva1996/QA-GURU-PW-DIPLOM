import { faker } from '@faker-js/faker';

export class ArticleBuilder {
    addArticleName() {
        this.articleName = faker.lorem.words(3);
        return this;
    }
    
    addShortDescription() {
        this.shortDescription = faker.lorem.sentence(5);
        return this;
    }
    
    addDescription() {
        this.description = faker.lorem.paragraph(2);
        return this;
    }
    
    addTags() {
        this.tags = faker.lorem.word();
        return this;
    }

    addEditArticleName() {
        this.articleName = faker.lorem.words(6);
        return this;
    }
    
    generate() {
        return { ...this };
    }
}

export class EditArticleBuilder {
    addEditArticleName() {
        this.articleName = faker.lorem.words(6);
        return this;
    }
    
    addEditShortDescription() {
        this.shortDescription = faker.lorem.sentence(8);
        return this;
    }
    
    addEditDescription() {
        this.description = faker.lorem.paragraph(3);
        return this;
    }
    
    addEditTags() {
        this.tags = faker.lorem.words(2); 
        return this;
    }
    
    generate() {
        return { ...this };
    }
}