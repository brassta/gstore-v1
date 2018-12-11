import {
    ActionMap as AuthActionMap,
    ActionTypes as AuthActionTypes,
} from './auth/actions';
import {
    ActionMap as UIActionMap,
    ActionTypes as UIActionTypes,
} from './ui/actions';
import {
    ActionMap as BalanceActionMap,
    ActionTypes as BalanceActionTypes,
} from './balance/actions';
import {
    ActionMap as CompetitionActionMap,
    ActionTypes as CompetitionActionTypes,
} from './competition/actions';

import {
    ActionMap as GNStoreActionMap,
    ActionTypes as GNStoreActionTypes
} from './gn-store/actions'

import {
    ActionMap as ProfileActionMap,
    ActionTypes as ProfileActionTypes,
} from './profile/actions';

export type ActionMap = AuthActionMap &
    UIActionMap &
    BalanceActionMap &
    CompetitionActionMap &
    ProfileActionMap &
    GNStoreActionMap;

export type ActionTypes =
    | AuthActionTypes
    | UIActionTypes
    | BalanceActionTypes
    | CompetitionActionTypes
    | ProfileActionTypes
    | GNStoreActionTypes

export * from './auth/actionCreators';
export * from './ui/actionCreators';
export * from './balance/actionCreators';
export * from './competition/actionCreators';
export * from './dashboard/actionCreators';
export * from './profile/actionCreators';
export * from './do-good/actionCreators';
export * from './gn-store/actionCreators';
