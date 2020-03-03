import { FirstNameAction } from "./firstNameActions";
import { SETFIRSTNAME } from "./../types";

const initialState: string = "";

export type FirstNameState = typeof initialState;

export default function(
  state: FirstNameState = initialState,
  action: FirstNameAction,
): FirstNameState {
  switch (action.type) {
    case SETFIRSTNAME:
      return action.payload;
    default:
      return state;
  }
}
