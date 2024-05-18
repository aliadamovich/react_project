
let initialState = {
	users: [
		// {
		// 	id: 1,
		// 	name: "Leanne Graham",
		// 	username: "Bret",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: true,
		// 	status: 'I am home!',
		// 	location: {
		// 		country: 'Belarus',
		// 		city: 'Minsk'
		// 	}

		// },
		// {
		// 	"id": 2,
		// 	"name": "Ervin Howell",
		// 	"username": "Antonette",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: true,
		// 	status: 'Looking for friends, not husband',
		// 	location: {
		// 		country: 'Paris',
		// 		city: 'France'
		// 	}
		// },
		// {
		// 	"id": 3,
		// 	"name": "Clementine Bauch",
		// 	"username": "Samantha",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: false,
		// 	status: 'busy...',
		// 	location: {
		// 		country: 'Argentina',
		// 		city: 'Buenos Aires'
		// 	}
		// },
		// {
		// 	"id": 4,
		// 	"name": "Patricia Lebsack",
		// 	"username": "Karianne",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: false,
		// 	status: 'Love my family!',
		// 	location: {
		// 		country: 'Belarus',
		// 		city: 'Minsk'
		// 	}
		// },
		// {
		// 	"id": 5,
		// 	"name": "Chelsey Dietrich",
		// 	"username": "Kamren",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: false,
		// 	status: 'Life is perfect.Own it!',
		// 	location: {
		// 		country: 'Belarus',
		// 		city: 'Minsk'
		// 	}
		// },
		// {
		// 	"id": 6,
		// 	"name": "Mrs. Dennis Schulist",
		// 	"username": "Leopoldo_Corkery",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: false,
		// 	status: 'Nobody loves me!',
		// 	location: {
		// 		country: 'Belarus',
		// 		city: 'Minsk'
		// 	}
		// },
		// {
		// 	"id": 7,
		// 	"name": "Kurtis Weissnat",
		// 	"username": "Elwyn.Skiles",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: false,
		// 	status: 'I am home!',
		// 	location: {
		// 		country: 'Belarus',
		// 		city: 'Minsk'
		// 	}
		// },
		// {
		// 	"id": 8,
		// 	"name": "Nicholas Runolfsdottir V",
		// 	"username": "Maxime_Nienow",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: false,
		// 	status: 'I am home!',
		// 	location: {
		// 		country: 'Belarus',
		// 		city: 'Minsk'
		// 	}
		// },
		// {
		// 	"id": 9,
		// 	"name": "Glenna Reichert",
		// 	"username": "Delphine",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: false,
		// 	status: 'I am home!',
		// 	location: {
		// 		country: 'Belarus',
		// 		city: 'Minsk'
		// 	}
		// },
		// {
		// 	"id": 10,
		// 	"name": "Clementina DuBuque",
		// 	"username": "Moriah.Stanton",
		// 	photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
		// 	followed: false,
		// 	status: 'I am home!',
		// 	location: {
		// 		country: 'Belarus',
		// 		city: 'Minsk'
		// 	}
		// }
	],
	currentPage: 1,
	totalUsers: 0,
	usersOnPage: 9,
	isFetching: false,
}

export const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case 'TOGGLE-FOLLOW':
			return {

				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {
							...u,
							followed: !u.followed
						};
					}
					return u;
				})
			}

		case 'SET-USERS':
			return { ...state, users: action.users }

		case 'GET-USERS-QUANTITY':
			return {
				...state, totalUsers: action.number }

		case 'CHANGE-CURRENT-PAGE':
			return{
				...state, 
				currentPage: action.page
			}
		case 'LOAD-MORE-USERS':
			 return{
				...state,
				currentPage: state.currentPage + 1
			 }
			case 'TOGGLE-IS-FETCHING':
				return {
					...state,
					isFetching: action.isFetching
				}

		default:
			return state;
	}
}

export const toggleFollowAC = (userId) => ({ type: 'TOGGLE-FOLLOW', userId })
export const setUsersAC =(users) => ({type: 'SET-USERS', users });

export const getUsersQuantityAC = (number) => ({ type: 'GET-USERS-QUANTITY', number });
export const changeCurrentPageAC = (pageNum) => ({ type: 'CHANGE-CURRENT-PAGE', page: pageNum});
export const loadMoreUsersAC = () => ({type: 'LOAD-MORE-USERS'});
export const toggleIsFetchingAC = (isFetching) => ({ type: 'TOGGLE-IS-FETCHING', isFetching})

