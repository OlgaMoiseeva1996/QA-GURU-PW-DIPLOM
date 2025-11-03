import { faker } from '@faker-js/faker';

export class UserBuilder {
    addEmail() {
        this.email = faker.internet.email();
        return this;
    }
    
    addName() {
        this.name = faker.person.fullName();
        return this;
    }
    
    addPassword(symbol = 10) {
        this.password = faker.internet.password({ length: symbol });
        return this;
    }
    
    generate() {
        return { ...this };
    }
}