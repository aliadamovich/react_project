import { Users } from "./Users";
import { connect } from "react-redux";
import { toggleFollowAC, setUsersAC, getUsersQuantityAC, changeCurrentPageAC, loadMoreUsersAC, toggleIsFetchingAC } from "../../redux/reducers/usersReducer";


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

function mapStateToProps(state) {
	return {
		users: state.usersPage.users,
		totalUsers: state.usersPage.totalUsers,
		usersOnPage: state.usersPage.usersOnPage,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

function mapDispatchToProps(dispatch) {
	return{
		toggleFollow: (userId) => { dispatch(toggleFollowAC(userId))},
		setUsers: (users) => { dispatch(setUsersAC(users))},
		getUsersQuantity: (number) => { dispatch(getUsersQuantityAC(number))},
		changePage: (pageNum) => { dispatch(changeCurrentPageAC(pageNum))},
		loadMoreUsers: () => { dispatch(loadMoreUsersAC())},
		toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching))}
	}
}