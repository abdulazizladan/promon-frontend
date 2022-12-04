export class Project {
  "id": string;
  "title": string;
  "description": string;
  "dateAdded" : Date;
  "status": Status
}

export enum Status {
  notStarted = "not started",
  inProgress = "in progress",
  completed = "completed",
  awaitingInspection = "awaiting inspection",
  abandoned = "abandoned"
}
