import { SETADDRESSTWO } from "../types";
import { Dispatch } from "redux";

function setAddressTwoAction(payload: string) {
  return <const>{ type: SETADDRESSTWO, payload: payload };
}

export function setAddressTwo(dispatch: Dispatch, payload: string) {
  dispatch(setAddressTwoAction(payload));
}

export type AddressTwoAction = ReturnType<typeof setAddressTwoAction>;
