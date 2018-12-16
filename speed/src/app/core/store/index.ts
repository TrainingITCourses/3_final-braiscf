import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromStatus from './status/status.reducer';

export interface State {
  launch: fromLaunch.LaunchesState;
  status: fromStatus.StatusesState;
}

export const reducers: ActionReducerMap<State> = {

  launch: fromLaunch.reducer,
  status: fromStatus.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
