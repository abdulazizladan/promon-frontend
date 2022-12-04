export class Contractor {
  "id": string;
  "name": string;
  "contact": {
    "email": string;
    "website": string;
    "address": {
      "streetAddress": string;
      "lga": string;
      "state": string;
      "country": string
    } | null;
  } | null;
}
