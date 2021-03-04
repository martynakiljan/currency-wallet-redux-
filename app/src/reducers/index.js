import { combineReducers } from "redux";

import  APIreducer  from "../api/API_reducer";
import  localStorageReducer  from "../localStorage/localStorage_reducer";

const reducers = combineReducers({
    localStorage: localStorageReducer,
    api: APIreducer,
});

export default reducers;