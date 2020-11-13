// libraries
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// reducers
import auth from './auth/reducer'

const reducers = combineReducers({
    auth
})

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))