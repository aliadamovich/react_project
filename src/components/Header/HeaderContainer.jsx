import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import axios from 'axios';
import { setAuthProfileIdAC } from '../../redux/reducers/authReducer';
class HeaderContainer extends React.Component {

	componentDidMount() {

		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
			.then(resp => {
				if (resp.data.resultCode === 0) {
					this.props.setAuthProfileId(resp.data.data)
				}
			})
		
	}
	render() {
		return <Header {...this.props} />
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

function mapStateToProps(state) {
	return {
		login: state.auth.autID.login,
		isAuth: state.auth.isAuth
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setAuthProfileId: (userAuth) => dispatch(setAuthProfileIdAC(userAuth))
	}
}