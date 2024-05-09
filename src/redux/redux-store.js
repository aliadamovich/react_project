import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from "./reducers/profileReducer";
import { dialogReducer } from "./reducers/dialogsReducer";

export let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogReducer,
})

export let store = configureStore({
	reducer: reducers
})

