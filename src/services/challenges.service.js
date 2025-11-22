import { test } from "@playwright/test";

export class ChallengesService {
  constructor(request) {
    this.request = request;
  }

  async getChallenges(token, testinfo) {
  return test.step("2/GET /challenges", async () => {
    const response = await this.request.get(`${testinfo.project.use.apiURL}/challenges`,
      {
        headers: { "X-CHALLENGER": token },
      },
    );
    const body = await response.json();
    const headers = response.headers();
    return { body, headers, response };
    });
  }
}