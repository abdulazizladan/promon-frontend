import { contractorDetails } from "./contractorDetails.model";

export class Contractor {
  "id": string = "jnasd";
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
  "details": contractorDetails | null;
}
