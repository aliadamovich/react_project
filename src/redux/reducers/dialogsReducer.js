export const dialogReducer = (state, action) => {

	switch (action.type) {
		case 'UPDATE-NEW-MESSAGE-TEXT':
			state.newMessageText = action.body;
			return state;

		case 'ADD-MESSAGE':
			let newMsg = {
				"postId": 1,
				"id": 11,
				"name": state.newMessageText,
				"email": "Eliseo@gardner.biz",
				"body": 'abfhds'
			}
			state.messages = [...state.messages, newMsg]
			state.newMessageText = '';
			return state;

		default: return state

	}
}

export const updateNewMessageTextActionCreator = (msg) => ({
	type: 'UPDATE-NEW-MESSAGE-TEXT',
	body: msg
})
export const sendNewMessageActionCreator = () => ({ type: 'ADD-MESSAGE' })