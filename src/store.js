import { createStore, applyMiddleware, compose } from "redux";
import thunk from  "redux-thunk"
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

let store;
const ReactReduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ReactReduxDevtools)
)

export default store;