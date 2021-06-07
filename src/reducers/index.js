import { combineReducers } from 'redux';

import userReducer from "./userReducer";
import articalReducer from "./articalReducer";

const rootReducer = combineReducers({
    userState: userReducer,
    articalState: articalReducer,
});

export default rootReducer;