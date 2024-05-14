
import { sendNewMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogsReducer'
import { DialogsPage } from './DialogsPage';
import { connect } from 'react-redux';

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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage);