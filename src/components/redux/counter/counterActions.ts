import { INCREMENT, DECREMENT, RESET } from "../types";
import { Dispatch } from "redux";

function incrementCounterAction() {
  return <const>{ type: INCREMENT };
}

export function incrementCounter(dispatch: Dispatch) {
  dispatch(incrementCounterAction());
}

function decrementCounterAction() {
  return <const>{ type: DECREMENT };
}

export function decrementCounter(dispatch: Dispatch) {
  dispatch(decrementCounterAction());
}

function resetCounterAction() {
  return <const>{ type: RESET };
}

export function resetCounter(dispatch: Dispatch) {
  dispatch(resetCounterAction());
}

export type CounterAction = ReturnType<
  | typeof incrementCounterAction
  | typeof decrementCounterAction
  | typeof resetCounterAction
>;
