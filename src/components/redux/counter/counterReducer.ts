import { CounterAction } from "./counterActions";
import { INCREMENT, DECREMENT, RESET } from "../types";

const initialState = { counter: 0 };

export type CounterState = typeof initialState;

export default function(
  state: CounterState = initialState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
}
