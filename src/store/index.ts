import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducers";

// add more middlewares here
const middlewares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
