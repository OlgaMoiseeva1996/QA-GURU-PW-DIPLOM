import { faker } from '@faker-js/faker';

export class TodoBuilder {
    todos() {
        this.title = faker.string.alpha({ length: 2 });
        this.doneStatus = faker.datatype.boolean();
        this.description = faker.string.alpha({ length: 5 });
        return this;
    }

    todosDoneStatus() {
        this.title = faker.string.alpha({ length: 3 });
        this.doneStatus = "hello";
        this.description = faker.string.alpha({ length: 5 });
        return this;
    }

    todosTitleTooLong() {
        this.title = faker.string.alpha({ length: 51 });
        this.doneStatus = faker.datatype.boolean();
        this.description = faker.string.alpha({ length: 5 });
        return this;
    }

    todosDescriptionTooLong() {
        this.title = faker.string.alpha({ length: 3 });
        this.doneStatus = faker.datatype.boolean();
        this.description = faker.string.alpha({ length: 201 });
        return this;
    }

    todosMaxOutContent() {
        this.title = faker.string.alpha({ length: 50 });
        this.doneStatus = faker.datatype.boolean();
        this.description = faker.string.alpha({ length: 200 });
        return this;
    }

    todosContentToolong() {
        this.title = faker.string.alpha({ length: 50 });
        this.doneStatus = faker.datatype.boolean();
        this.description = faker.string.alpha({ length: 5001 });
        return this;
    }

    todosExtra() {
        this.title = faker.string.alpha({ length: 7 });
        this.doneStatus = faker.datatype.boolean();
        this.description = faker.string.alpha({ length: 15 });
        this.priority = "extra";
        return this;
    }

    todosId() {
        this.title = faker.string.alpha({ length: 7 });
        this.doneStatus = faker.datatype.boolean();
        this.description = faker.string.alpha({ length: 15 });
        return this;
    }

    todosIdPositive() {
        this.title = faker.string.alpha({ length: 7 });
        return this;
    }

    todosIdNegative() {
        this.title = faker.string.alpha({ length: 9 });
        return this;
    }

    todosIdFull() {
        this.title = faker.string.alpha({ length: 7 });
        this.doneStatus = faker.datatype.boolean();
        this.description = faker.string.alpha({ length: 15 });
        return this;
    }
    
    todosIdPartial() {
        this.title = faker.string.alpha({ length: 7 });
        return this;
    }

    todosIdNoTitle() {
        this.description = faker.string.alpha({ length: 15 });
        return this;
    }

    todosIdNoAmendId() {
        this.id = 4;
        this.title = faker.string.alpha({ length: 7 });
        return this;
    }

    generate() {
        return { ...this };
    }
}