import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { profileReducer } from "./reducers/profileReducer";
import { dialogReducer } from "./reducers/dialogsReducer";
import { usersReducer } from "./reducers/usersReducer";

export let reducers = combineReducers({
	profilePage: profileReducer,
	dialoPage: dialogReducer,
	usersPage: usersReducer,
})

export let store = configureStore({ reducer: reducers })

window.store = store;