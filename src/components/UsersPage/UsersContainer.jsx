import { Users } from "./Users";
import { connect } from "react-redux";
import { toggleFollowAC, setUsersAC, getUsersQuantityAC, changeCurrentPageAC, loadMoreUsersAC, toggleIsFetchingAC } from "../../redux/reducers/usersReducer";
import axios from 'axios';
import React from "react";

class UsersAPIComponent extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
			.then(resp => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(resp.data.items);
				this.props.getUsersQuantity(resp.data.totalCount);
			})
	}

	onLoadClick() {
		this.props.loadMoreUsers();
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
			.then(resp => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(resp.data.items);
			})
	}

	render() {
		return <Users 
									users={this.props.users}
									onLoadClick={this.onLoadClick.bind(this)}
									toggleFollow={this.props.toggleFollow}
									isFetching={this.props.isFetching}
									/>
	}
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

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