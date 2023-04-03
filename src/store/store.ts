import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "store/reducres";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
