import React from 'react';
import { connect } from 'react-redux';
import { asyncLoginUser } from '../actions/user.asyncaction';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uname: '',
			pwd: '',
			email: '',
			err: false,
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	componentWillUnmount() {
		this.setState({
			err: false,
		})
	}
	handleSubmit = () => {
		const { uname, pwd, email } = this.state;
		const payload = {
			uname,
			pwd,
			email
		}
		this.props
			.loginUser(payload)
			.then((data) => {
				if (data.length) {
					this.setState({
						err: false,
					});
					this.props.history.push('/dashboard');
				}
			})
			.catch((err) => {
				this.setState({
					err: true,
				})
			}
			);
	};
	render() {
		return (
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: '90px',
					bottom: 0,
					width: '290px',
					height: '300px',
					margin: 'auto',
					boxShadow: `0px 0px 6px 1px gray`,
					padding: '30px',
				}}
			>
				{this.state.err ? <h4> No User Found </h4> : ''}
				<h2> Login Form </h2>
				<div>
					<label style={{ display: 'inline-block', width: '70px' }}>Name:</label>
					<input
						type="text"
						name="uname"
						value={this.state.uname}
						onChange={this.handleChange}
						style={{
							height: '25px',
							width: '60%',
							borderRadius: '3px',
						}}
					/>
				</div>
				<br />
				<div>
					<label style={{ display: 'inline-block', width: '70px' }}>Email:</label>
					<input
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						style={{
							height: '25px',
							width: '60%',
							borderRadius: '3px',
						}}
					/>
				</div>
				<br />
				<div>
					<label style={{ display: 'inline-block', width: '72px' }}>Password:</label>
					<input
						type="password"
						name="pwd"
						value={this.state.pwd}
						onChange={this.handleChange}
						style={{
							height: '25px',
							width: '60%',
							borderRadius: '3px',
						}}
					/>
				</div>
				<div style={{ marginTop: '18px', textAlign: 'center' }}>
					<button
						type="submit"
						name="submit"
						onClick={this.handleSubmit}
						style={{
							width: '120px',
							height: '30px',
						}}
					>
						Submit
					</button>
				</div>
				<a href="/signup">NewUser ? </a>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.userReducers.user
})

const mapDispatchToProps = (dispatch) => ({
	loginUser: (payload) => dispatch(asyncLoginUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
