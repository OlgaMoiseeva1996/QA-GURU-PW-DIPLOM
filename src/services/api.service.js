import { ChallengerService, ChallengesService, ToDos, ToDo } from "../services/index";

export class Api {
  constructor(request) {
    this.requet = request;
    this.challenger = new ChallengerService(request);
    this.challenges = new ChallengesService(request);
    this.todos = new ToDos(request);
    this.todo = new ToDo(request);
    

  }
}