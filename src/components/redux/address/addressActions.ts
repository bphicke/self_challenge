import { SETADDRESS } from "../types";
import { Dispatch } from "redux";

function setAddressAction(payload: string) {
  return <const>{ type: SETADDRESS, payload: payload };
}

export function setAddress(dispatch: Dispatch, payload: string) {
  dispatch(setAddressAction(payload));
}

export type AddressAction = ReturnType<typeof setAddressAction>;
