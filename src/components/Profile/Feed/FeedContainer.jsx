import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducers/profileReducer'
import { Feed } from './Feed';
import React from 'react';

export const FeedContainer = (props) => {
	// debugger;
	let state = props.store.getState();
	console.log(state)
	function createPost() {
		props.store.dispatch(addPostActionCreator())
	}

	function addPostText(text) {
		props.store.dispatch(updateNewPostTextActionCreator(text))
	}

	return (
		<Feed posts={state.profilePage.posts} 
					newPostText={state.profilePage.newPostText} 
					addPost={createPost} 
					updatePostText={addPostText} />
	)
}