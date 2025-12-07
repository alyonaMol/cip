import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../features/main/models/types';
import { logoutUser, setUser } from './user.actions';

// Define the shape of the state
// Store the User and UserData object or null if not set
export interface UserState {
  user: User | null;
}

// Initial state with no user
const initialState: UserState = {
  user: null,
};

const userReducer = createReducer(
  initialState,
  on(setUser, (state, { type, ...payload }: User & Action) => ({
    ...state,
    user: payload,
  })),
  on(logoutUser, (state) => ({ ...state, user: null }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}

export { initialState };
