import React, {Component} from 'react';
import history from '../history';

class GoogleAuth extends Component {
	state = {isSignedIn: null};

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '726186511952-ieafh5e4sn9nahfsrphgq4animfvoui2.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.setState({isSignedIn: this.auth.isSignedIn.get()});
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	onAuthChange = () => {
		this.setState({isSignedIn: this.auth.isSignedIn.get()});
	};

	onSignInClick = () => {
		this.auth.signIn();
		history.push('/');
	};

	onSignOutClick = () => {
		this.auth.signOut();
		history.push('/');
		window.location.reload(true);
	};


renderAuthButton = () => {
	if (this.state.isSignedIn === null) {
	} else if (this.state.isSignedIn) {
		return (
			<button
				onClick={this.onSignOutClick}
				className="ui red google button"
			>
				Sign out
			</button>
		);
	} else {
		return (
			<button
				onClick={this.onSignInClick}
				className="ui red google button"
			>
				Sign in
			</button>
		);
	}
};

	render() {
		console.log(this.state.isSignedIn);
		return (
			<div>
				{this.renderAuthButton()}
			</div>
		);
	}
}

export default GoogleAuth;


// renderAuthButton = () => {
// 	if (this.state.isSignedIn === null) {
// 		return null;
// 	} else if (this.state.isSignedIn) {
// 		return (
// 			<button
// 				onClick={this.onSignOutClick}
// 				className="ui red google button"
// 			>
// 				Sign out
// 			</button>
// 		);
// 	} else {
// 		return (
// 			<button
// 				onClick={this.onSignInClick}
// 				className="ui red google button"
// 			>
// 				Sign in
// 			</button>
// 		);
// 	}
// };
//
// render() {
// 	console.log(this.state.isSignedIn);
// 	return (
// 		<div>
// 			{this.renderAuthButton()}
// 		</div>
// 	);
// }
// }
