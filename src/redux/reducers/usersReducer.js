
let initialState = {
	users: [
		{
			id: 1,
			name: "Leanne Graham",
			username: "Bret",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: true,
			status: 'I am home!',
			location: {
				country: 'Belarus',
				city: 'Minsk'
			}

		},
		{
			"id": 2,
			"name": "Ervin Howell",
			"username": "Antonette",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: true,
			status: 'Looking for friends, not husband',
			location: {
				country: 'Paris',
				city: 'France'
			}
		},
		{
			"id": 3,
			"name": "Clementine Bauch",
			"username": "Samantha",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: false,
			status: 'busy...',
			location: {
				country: 'Argentina',
				city: 'Buenos Aires'
			}
		},
		{
			"id": 4,
			"name": "Patricia Lebsack",
			"username": "Karianne",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: false,
			status: 'Love my family!',
			location: {
				country: 'Belarus',
				city: 'Minsk'
			}
		},
		{
			"id": 5,
			"name": "Chelsey Dietrich",
			"username": "Kamren",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: false,
			status: 'Life is perfect.Own it!',
			location: {
				country: 'Belarus',
				city: 'Minsk'
			}
		},
		{
			"id": 6,
			"name": "Mrs. Dennis Schulist",
			"username": "Leopoldo_Corkery",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: false,
			status: 'Nobody loves me!',
			location: {
				country: 'Belarus',
				city: 'Minsk'
			}
		},
		{
			"id": 7,
			"name": "Kurtis Weissnat",
			"username": "Elwyn.Skiles",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: false,
			status: 'I am home!',
			location: {
				country: 'Belarus',
				city: 'Minsk'
			}
		},
		{
			"id": 8,
			"name": "Nicholas Runolfsdottir V",
			"username": "Maxime_Nienow",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: false,
			status: 'I am home!',
			location: {
				country: 'Belarus',
				city: 'Minsk'
			}
		},
		{
			"id": 9,
			"name": "Glenna Reichert",
			"username": "Delphine",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: false,
			status: 'I am home!',
			location: {
				country: 'Belarus',
				city: 'Minsk'
			}
		},
		{
			"id": 10,
			"name": "Clementina DuBuque",
			"username": "Moriah.Stanton",
			photoUrl: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200',
			isFollowed: false,
			status: 'I am home!',
			location: {
				country: 'Belarus',
				city: 'Minsk'
			}
		}
	],
}

export const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case 'TOGGLE-FOLLOW':
			return {
				...state,
				// users: [...state, state.users.map(u => {
				// 	if(u.id == action.Id) {
				// 		return {
				// 			...u,
				// 			isFollowed: !u.isFollowed
				// 		}
				// 	}
				// 	return {...u}
				// })]
				users: state.users.map(u => {
					if(u.id === action.Id) {
						return {
							...u,
							isFollowed: !u.isFollowed
						};
					}
					return u;
				})
			}
			
		// case 'SET-USERS':
		// 	return {
		// 		...state,
		// 		users: [...state.users, ...action.array]
		// 	}
		default:
			return state;
	}
}

export const toggleFollowAC = (userId) => ({
	type: 'TOGGLE-FOLLOW',
	Id: userId
})

// export const setUsersAC =(userArray) => ({
// 	type: 'SET-USERS',
// 	array: userArray
// })