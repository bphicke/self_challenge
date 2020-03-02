import { combineReducers } from "redux";
import counter from "../counter/counterReducer";

const rootState = combineReducers({
  counter,
});

export type RootState = ReturnType<typeof rootState>;

export default rootState;
