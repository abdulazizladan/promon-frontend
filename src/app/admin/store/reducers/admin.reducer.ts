import { createReducer, on } from "@ngrx/store";
import { Feed } from "../../models/feed.model";
import { Stats } from "../../models/stats.model";
import { loadStats } from "../actions/dashboard.actions";

export class AdminState {
  "user": {
    "firstName": string;
    "lastName": string;
    "profilePic": string;
  }
  "stats": {
    "activeProjects": number;
    "pendingProjects": number;
    "completedProjects": number;
    "abandonedProjects": number;
  };
  "newsFeed": Feed[];
  "status": 'pending' | 'loading' | 'success' | 'failure';
}

export const AdminFeatureKey = 'admin';

export const initialState: AdminState = {
  user: {
    firstName: "abdulaziz",
    lastName: "ladan",
    profilePic: "ladan.jpg"
  },
  stats: {
    abandonedProjects: 2,
    activeProjects: 5,
    completedProjects: 12,
    pendingProjects: 3
  },
  newsFeed: [],
  status: 'pending'
}


export const AdminReducer = createReducer(
    initialState,
    on(loadStats, (state) => ({...state, status: 'loading'}))
)
