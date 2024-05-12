import React from 'react';
import { sendNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogsReducer'
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

// export const DialogsContainer = (props) => {

// 	let state = props.store.getState();

// 	function messageChange() {
// 		props.store.dispatch(sendNewMessageActionCreator())
// 	}
// 	function changeText(msg) {
// 		props.store.dispatch(updateNewMessageTextActionCreator(msg))
// 	}
// 	return (
// 		<Dialogs
// 			dialogPage={state.dialoPage}
// 			updateText={changeText}
// 			addMessage={messageChange}
// 		/>
// 	)
// }

let mapStateToProps = (state) => {
	return {
		dialogPage: state.dialoPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateText: (msg) => { dispatch(updateNewMessageTextActionCreator(msg)) },
		addMessage: () => { dispatch(sendNewMessageActionCreator()) }
	}
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);