import React from 'react';
import { sendNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogsReducer'
import { Dialogs } from './Dialogs';

export const DialogsContainer = (props) => {
	// debugger
	let state = props.store.getState();
	
	function messageChange() {
		props.store.dispatch(sendNewMessageActionCreator())
	}
	function changeText(msg) {
		props.store.dispatch(updateNewMessageTextActionCreator(msg))
	}
	return (
		<Dialogs
		newMessageText={state.dialogPage.newMessageText}
		users={state.dialogPage.users}
		photos={state.dialogPage.photos}
		messages={state.dialogPage.messages}
		updateText={changeText}
		addMessage={messageChange}/>
	)
}
