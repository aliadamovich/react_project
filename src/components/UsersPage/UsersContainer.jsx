import { Users } from "./Users";
import { connect } from "react-redux";
import { toggleFollowAC, setUsersAC } from "../../redux/reducers/usersReducer";


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

function mapStateToProps(state) {
	return {
		users: state.usersPage.users,
	}
}

function mapDispatchToProps(dispatch) {
	return{
		toggleFollow: (userId) => { dispatch(toggleFollowAC(userId))},
		// setUsers: (users) => { dispatch(setUsersAC(users))}
	}
}