import { createAction, props } from '@ngrx/store';
import { User } from '../../../core/models/types';

export const setUser = createAction('[User] Set User', props<User>());

export const logoutUser = createAction('[User] Logout User');
