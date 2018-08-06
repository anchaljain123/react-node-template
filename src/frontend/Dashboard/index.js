import React, { Component } from 'react';
import {connect} from 'react-redux';
import Logout from '../Logout';
import Form from '../Form';
import { getCodes } from '../actions/user.asyncaction';

class Dashboard extends Component {
	componentDidMount(){
		this.props.getCodes();
	}
	render() {
		return (
			<div>
				<h2 style={{ marginTop: '120px' }}>
				Welcome { user.length ? this.props.user[0].uname: null } !!
				</h2>
				<Logout />
				<Form />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	user: state.userReducers.user
});

const mapDispatchToProps = dispatch => ({
	getCodes:  () => dispatch(getCodes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);