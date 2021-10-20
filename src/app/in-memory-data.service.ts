import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    let contractors = [
      {
        "_id": "djfui972",
        "name": "Rhino contractors",
        "website": "www.abcd.xyz",
        "branches": [{
          "designation": "main",
          "state": "kaduna",
          "lga": "igabi",
          "address": "1, Talatu Avenue, birnin yero",
          "phoneNumber": "08012345678"
        }]
      },
        {
        "_id": "djfuisdf2",
        "name": "LazyMan corps",
        "website": "www.sdjhfb.co",
        "branches": [{
          "designation": "main",
          "state": "kaduna",
          "lga": "Zaria",
          "address": "45, Ban Zazzau",
          "phoneNumber": "08065345678"
        }]
      },
      {
        "_id": "djfudsdf2",
        "name": "Aiki corps",
        "website": "www.sdjhfb.co",
        "branches": [{
          "designation": "main",
          "state": "kaduna",
          "lga": "kaduna north",
          "address": "malali",
          "phoneNumber": "08065321678"
        }]
      }
    ]

    let projects = [
      {
          "_id": "kt/dnj/tdm/2021",
          "title": "classroom renovation",
          "description": "renovation of 1 classromm",
          "location": "GDSS Tandama, Katsina",
          "dateAwarded": "2021-05-22"
      },
      {
          "_id": "kd/igb/rgc/2021",
          "title": "Supply of fertilizer",
          "description": "Deliver 5000 bags of fertilizers to Igabi LG Farmers association",
          "location": "Igabi LGA office",
          "dateAwarded": "2021-05-22"
      },
      {
          "_id": "kt/dnj/tdm/2021",
          "title": "classroom renovation",
          "description": "renovation of 1 classromm",
          "location": "GDSS Tandama, Katsina",
          "dateAwarded": "2021-06-15"
      }
  ]

  let users = [
    {
        "email": "abdulazizladan@gmail.com",
        "firstName": "Abdulaziz",
        "lastName": "Ladan",
        "password": "sdbnosud",
        "role": "supervisor",
        "active": true
    },
    {
        "email": "phantommaria@claymore.com",
        "firstName": "Mariah",
        "lastName": "Abubakar",
        "password": "sdbnosud",
        "role": "contractor",
        "active": false
    },
    {
        "email": "abc@def.com",
        "firstName": "ali",
        "lastName": "buhari",
        "password": "sdbnosud",
        "role": "contractor",
        "active": true
    },
    {
        "email": "yusuf_t@hotmail.com",
        "firstName": "yusuf",
        "lastName": "tanimu",
        "password": "sdbnosud",
        "role": "contractor",
        "active": true
    },
    {
        "email": "ghi@jkl.com",
        "firstName": "rabiu",
        "lastName": "sani",
        "password": "sdbnosud",
        "role": "contractor",
        "active": true
    }
]
let contracts = [
  {

  }
]
    return {contractors, projects, users}
  }
}
