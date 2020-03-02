import { createStore, applyMiddleware, Store as ReduxStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./root";

export const initialState = {};

export type Store = ReduxStore<typeof initialState>;

export type InitialState = typeof initialState;

export function initializeStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
