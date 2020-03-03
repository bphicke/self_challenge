import { TESTFORVALIDATION } from "../types";
import { Dispatch } from "redux";

function testForValidationAction() {
  return <const>{ type: TESTFORVALIDATION };
}

export function testForValidation(dispatch: Dispatch) {
  dispatch(testForValidationAction());
}

export type TestForValidationAction = ReturnType<
  typeof testForValidationAction
>;
