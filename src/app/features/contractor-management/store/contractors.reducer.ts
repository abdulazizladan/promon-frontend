import { createReducer, on } from "@ngrx/store";
import { addContractor } from "./contractors.actions";
import { Contractor } from "../models/contractor.model";
import { loadContractors } from "./contractors.actions";

export const featureKey = 'contractors';

export class ContractorsState {
  "contractors": Contractor[];
  "error": string;
  "status": 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ContractorsState = {
  contractors: [
    {
      id: 'RC21458',
      name: 'Rhino Construction Nigeria LLTD',
      contact: {
        email: 'admin@rhinoconstruction.ng',
        website: 'https://www.rhinoconstruction.ng',
        address: {
          streetAddress: '45, Yusuf Joseph street, off Sarauta way, Kaduna.',
          lga: 'kaduna north',
          state: 'kaduna',
          country: 'nigeria'
        }
      },
      details: null
    },
    {
      id: 'RC24158',
      name: 'Scorpion Enterprise LLTD',
      contact: {
        email: 'admin@scorpion.ng',
        website: 'https://www.scorpion.ng',
        address: {
          streetAddress: '45, Isuhu Audu street, off Sankera way, Katsina.',
          lga: 'danja',
          state: 'katsina',
          country: 'nigeria'
        }
      },
      details: null
    }
  ],
  error: '',
  status: 'pending'
}

export const ContractorsReducer = createReducer(
  initialState,
  on(loadContractors, (state) => ({...state, status: 'loading'})),
  on(addContractor, (state, { contractor }) => ({
    ...state,
    contractors: [ ...state.contractors, contractor ]
  }))

)
