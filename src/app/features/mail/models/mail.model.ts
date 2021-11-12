export interface Mail{
  id: string,
  recipientId: string,
  senderId: string,
  subject: string,
  body: string,
  dateSent: Date,
  read: boolean
}
