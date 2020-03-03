import { SETFIRSTNAME } from "../types";
import { Dispatch } from "redux";

function setFirstNameAction(payload: string) {
  return <const>{ type: SETFIRSTNAME, payload: payload };
}

export function setFirstName(dispatch: Dispatch, payload: string) {
  dispatch(setFirstNameAction(payload));
}

export type FirstNameAction = ReturnType<typeof setFirstNameAction>;
