import { createSelector, State } from '@ngrx/store';
import { UserState } from './user.reducer';

export const user = createSelector(
  // @ts-ignore
  (state: State) => state.user,
  (state: UserState) => state && state.user
);
