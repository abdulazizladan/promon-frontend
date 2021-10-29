export interface Contractor{
  "name": "string",
  "rcNumber": "string",
  "user": {
    "username": string,
    "password": string,
    "email": string,
  },
  "contacts": [
    {
      "firstName": "string",
      "lastName": "string",
      "website": "string",
      "email": "string",
      "phone": [
        "string"
      ]
    }
  ]
}
