import { combineReducers } from "redux";
import firstName from "../firstName/firstNameReducer";
import lastName from "../lastName/lastNameReducer";
import address from "../address/addressReducer";
import addressTwo from "../addressTwo/addressTwoReducer";
import testForValidation from "../testForValidation/testForValidationReducer";

const rootState = combineReducers({
  firstName,
  lastName,
  address,
  addressTwo,
  testForValidation,
});

export type RootState = ReturnType<typeof rootState>;

export default rootState;
