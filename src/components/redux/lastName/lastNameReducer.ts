import { LastNameAction } from "./lastNameActions";
import { SETLASTNAME } from "./../types";

const initialState: string = "";

export type LastNameState = typeof initialState;

export default function(
  state: LastNameState = initialState,
  action: LastNameAction,
): LastNameState {
  switch (action.type) {
    case SETLASTNAME:
      return action.payload;
    default:
      return state;
  }
}
