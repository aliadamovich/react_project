let initialState = {

	autID: {id: null, login: null, email: null},
	isAuth: false
}

export const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case 'SET-AUTH-PROFILE':

			return {
				...state,
				autID: action.userAuth,
				isAuth: true
			}

		default: return state

	}
}

export const updateNewMessageTextActionCreator = (msg) => ({
	type: 'UPDATE-NEW-MESSAGE-TEXT',
	body: msg
})
export const sendNewMessageActionCreator = () => ({ type: 'ADD-MESSAGE' })
export const setAuthProfileIdAC = (userAuth) => ({ type: 'SET-AUTH-PROFILE', userAuth })