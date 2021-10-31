interface Milestone{
  description: string;
  startDate: Date;
  endDate: Date;
  isCompleted: boolean
}

export interface Contract{
  id: string;
  projectId: string;
  contractorId: string;
  startDate: Date;
  deadline: Date;
  milestones: Milestone[]
}
