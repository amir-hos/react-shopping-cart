import {creatStore, applyMiddleware, compose  } from "redux";
import reducer from "./reducers/reducer";
import reduxThunk from 'redux-thunk';
const initState = {};
const enhancer = window.__REDUX-DEVTOOLS__EXTENSION_COMPOSE__ || compose
const store = creatStore(reducer , initState , enhancer(applyMiddleware(reduxThunk)))

export default store