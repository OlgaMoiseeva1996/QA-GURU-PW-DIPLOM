import { test } from '@playwright/test';

export class ToDo {
  constructor(request) {
    this.request = request;
  }

  async getTodoNotPlural(token, testinfo) {
    return test.step("04/GET /todo (404) not plural", async () => {
      const response = await this.request.get(`${testinfo.project.use.apiURL}/todo`, {
        headers: {
        "x-challenger": token,
      },
      });
  
    return response;
    });
  }
}