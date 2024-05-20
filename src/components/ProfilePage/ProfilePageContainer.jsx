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
		// debugger
		let profileId = this.props.router.params.userId;
		if (!profileId) profileId = 1079;
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`, {withCredentials: true})
			.then(resp => {
				this.props.setUserProfile(resp.data);
			})
	}

	render() {
		return <ProfilePage {...this.props}/>
	}
}

let withUrlDataContainerComponent = withRouter(ProfileAPIComponent)

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent);

function mapStateToProps(state) {
	return {
		userProfile: state.profilePage.userProfile,
		photoGrid: state.grid.photoGrid,
		// myID: state.auth.autID.id,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setUserProfile: (profile) => dispatch(setUserProfileAC(profile))
	}
}