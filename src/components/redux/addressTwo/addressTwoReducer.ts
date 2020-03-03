import { AddressTwoAction } from "./addressTwoActions";
import { SETADDRESSTWO } from "./../types";

const initialState: string = "";

export type AddressTwoState = typeof initialState;

export default function(
  state: AddressTwoState = initialState,
  action: AddressTwoAction,
): AddressTwoState {
  switch (action.type) {
    case SETADDRESSTWO:
      return action.payload;
    default:
      return state;
  }
}
