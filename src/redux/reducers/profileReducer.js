export const profileReducer = (state, action) => {

	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				"userId": 1,
				"id": 12,
				"title": state.newPostText,
				"body": 'new post'
			}
			state.posts = [newPost, ...state.posts]
			state.newPostText = '';
			return state;

		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.newText;
			return state;

		default: return state
	}
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (text) => ({
	type: 'UPDATE-NEW-POST-TEXT',
	newText: text
})