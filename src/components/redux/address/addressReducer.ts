import { AddressAction } from "./addressActions";
import { SETADDRESS } from "./../types";

const initialState: string = "";

export type AddressState = typeof initialState;

export default function(
  state: AddressState = initialState,
  action: AddressAction,
): AddressState {
  switch (action.type) {
    case SETADDRESS:
      return action.payload;
    default:
      return state;
  }
}
