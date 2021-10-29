export interface Project{
  _id: string,
  title: string,
  description: string,
  state: string,
  lga: string,
  dateAwarded: Date,
  status: number,
  milestones?: [
    {
      title: string,
      description: string,
      startDate: Date,
      endDate: Date
    }
  ]
}
