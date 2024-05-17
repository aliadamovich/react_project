import { ProfilePage } from "./ProfilePage";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfileAC } from "../../redux/reducers/profileReducer";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{ location, navigate, params }}
			/>
		);
	}

	return ComponentWithRouterProp;
}

class ProfileAPIComponent extends React.Component {

	componentDidMount() {
		
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(resp => {

				// this.props.toggleIsFetching(false)
				this.props.setUserProfile(resp.data);
			})
	}

	render() {
		// debugger;
		return <ProfilePage {...this.props}/>
	}
}

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIComponent);

function mapStateToProps(state) {
	return {
		userProfile: state.profilePage.userProfile
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setUserProfile: (profile) => dispatch(setUserProfileAC(profile))
	}
}