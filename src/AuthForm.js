import React, { Component } from 'react';
import "./AuthForm.css";
import * as firebase from 'firebase';

class AuthForm extends Component  {
	
	
	constructor(props) {
	    super(props);
	    this.state = {value: ''};
	    this.handleChangeEmail = this.handleChangeEmail.bind(this);
	    this.handleChangePassword = this.handleChangePassword.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
 	}

	handleChangeEmail(event) {
		this.setState({email: event.target.value, password: this.state.password});
	}

	handleChangePassword(event) {
		this.setState({password: event.target.value, email: this.state.email});
	}

	handleSubmit(event) {
		let email = this.state.email;
		let password = this.state.password;
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function() {});
	}

	// auth() {
	// 	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	// 	// Handle Errors here.
	// 	let errorCode = error.code;
	// 	let errorMessage = error.message;
	// 	});
	// }
	render() {
		return (
			<div className="AuthForm">
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.email} onChange={this.handleChangeEmail} className="email" placeholder="Email" />
					<input type="text" onChange={this.handleChangePassword} className="password" placeholder="Password" />
					<button className="button">Submit</button>
				</form>
			</div>
		)
	}
}

export default AuthForm;