import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer'
import { Feed } from './Feed';
import React from 'react';
import { connect } from 'react-redux';

// export const FeedContainer = (props) => {

// 	let state = props.store.getState();

// 	function createPost() {
// 		props.store.dispatch(addPostActionCreator())
// 	}

// 	function addPostText(text) {
// 		props.store.dispatch(updateNewPostTextActionCreator(text))
// 	}

// 	return (
// 		<Feed profilePage={state.profilePage}
// 					newPostText={state.profilePage}
// 					addPost={createPost} 
// 					updatePostText={addPostText} />
// 	)
// }

let mapStateToProps = (state) => ({
	profilePage: state.profilePage,
})

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => { dispatch(addPostActionCreator()) },
		updatePostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) }
	}
}
export const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(Feed);

