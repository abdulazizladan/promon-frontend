interface Milestone{
  description: string;
  startDate: Date; //expected commencement day
  actualStartDate: Date; //date milestone starts
  endDate: Date; // expected end date
  isCompleted: boolean; //status of project set by supervisor upon completion
  completionDate?: Date;
  supervisorId: string; //supervisor assigned to inspect project status
  comment: string; //set by supervisor
}

export interface Contract{
  id: string; //contract id
  projectId: string; // referenced from existing projects that do not exist in contracts
  contractorId: string; //
  startDate: Date; //
  deadline: Date; //
  milestones: Milestone[] //from the above Milestone model & Project must have at least 1 milestone
}
