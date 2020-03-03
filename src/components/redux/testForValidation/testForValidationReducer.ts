import { TestForValidationAction } from "./testForValidationActions";
import { TESTFORVALIDATION } from "../types";

const initialState: boolean = false;

export type TestForValidationState = boolean;

export default function(
  state: TestForValidationState = initialState,
  action: TestForValidationAction,
): TestForValidationState {
  switch (action.type) {
    case TESTFORVALIDATION:
      return true;
    default:
      return state;
  }
}
