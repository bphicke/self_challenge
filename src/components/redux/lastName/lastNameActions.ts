import { SETLASTNAME } from "../types";
import { Dispatch } from "redux";

function setLastNameAction(payload: string) {
  return <const>{ type: SETLASTNAME, payload: payload };
}

export function setLastName(dispatch: Dispatch, payload: string) {
  dispatch(setLastNameAction(payload));
}

export type LastNameAction = ReturnType<typeof setLastNameAction>;
