interface Milestone{
  description: string;
  startDate: Date; //expected commencement day
  actualStartDate: Date; //date milestone starts
  endDate: Date; // expected end date
  completionDate?: Date; //date milestone is completed
  approveDate: Date; //Date supervisor confirms milestone completion
  supervisorId: string; //supervisor assigned to inspect project status
  comment: string; //set by supervisor upon completion
}

export interface Contract{
  id: string; //contract id
  projectId: string; // referenced from existing projects that do not exist in contracts
  contractorId: string; //we could use the RC Number
  startDate: Date; //
  deadline: Date; //
  milestones: Milestone[] //from the above Milestone model & Project must have at least 1 milestone
  addedBy: string //user id, admin ID
}
