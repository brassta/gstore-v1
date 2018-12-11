import { Action } from 'redux';

type ActionType<ActionMap> = keyof ActionMap;
type ActionPayload<
  ActionMap,
  Type extends ActionType<ActionMap>
> = ActionMap[Type];

export interface ActionObject<ActionMap, Type extends ActionType<ActionMap>>
  extends Action {
  type: Type;
  payload: ActionPayload<ActionMap, Type>;
}

export type Actions<ActionMap> = {
  [P in ActionType<ActionMap>]: ActionObject<ActionMap, P>
}[ActionType<ActionMap>];

// Keep in mind that in order for typings to work for createAction with
// default payload, partial payload when added to the default one has to
// match the ActionPayload signature.
export function createAction<ActionMap, Type extends ActionType<ActionMap>>(
  type: Type
): (payload: ActionPayload<ActionMap, Type>) => ActionObject<ActionMap, Type>;
export function createAction<ActionMap, Type extends ActionType<ActionMap>>(
  type: Type,
  defaultPayload: Partial<ActionPayload<ActionMap, Type>>
): (
  payload: Partial<ActionPayload<ActionMap, Type>>
) => ActionObject<ActionMap, Type>;
export function createAction<ActionMap, Type extends ActionType<ActionMap>>(
  type: Type,
  defaultPayload?: Partial<ActionPayload<ActionMap, Type>>
) {
  if (defaultPayload !== undefined) {
    return (
      partialPayload: Partial<ActionPayload<ActionMap, Type>>
    ): ActionObject<ActionMap, Type> => ({
      payload: Object.assign(defaultPayload, partialPayload) as ActionPayload<
        ActionMap,
        Type
      >,
      type,
    });
  }

  return (
    payload: ActionPayload<ActionMap, Type>
  ): ActionObject<ActionMap, Type> => ({ type, payload });
}

type ReducerCases<State, ActionMap> = {
  [T in ActionType<ActionMap>]: (
    state: State,
    payload: ActionPayload<ActionMap, T>
  ) => State
};

export const createReducer = <State, ActionMap>(
  cases: Partial<ReducerCases<State, ActionMap>>,
  initialState: State
) => {
  return function(
    state: State = initialState,
    action: Actions<ActionMap>
  ): Readonly<State> {
    const fn = cases[action.type];
    if (fn) {
      return fn(state, action.payload);
    } else {
      return state;
    }
  };
};
