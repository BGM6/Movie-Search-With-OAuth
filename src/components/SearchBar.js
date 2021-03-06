import React from 'react';
import {useState, useEffect} from 'react';
import Message from './Message';

const SearchBar = ({onSubmitProp}) => {
	const [isSignedIn, setIsSignedIn] = useState(null);
	const [term, setTerm] = useState('');

	useEffect(() => {
		const isLogged = async () => {
			await window.gapi.load('client:auth2', () => {
				window.gapi.client.init({
					clientId: '726186511952-ieafh5e4sn9nahfsrphgq4animfvoui2.apps.googleusercontent.com',
					scope: 'email'
				}).then(() => {
					const auth = window.gapi.auth2.getAuthInstance();
					setIsSignedIn(auth.isSignedIn.get());
					auth.isSignedIn.listen(onAuthChange);
				});
			});
		};
		isLogged().then(r => r);
	}, []);

	const onAuthChange = () => {
		const auth = window.gapi.auth2.getAuthInstance();
		setIsSignedIn(auth.isSignedIn.get());
	};

	const onFormSubmit = event => {
		event.preventDefault();
		onSubmitProp(term)
		setTerm('')
	};

	const searchBar = () => {
		if (isSignedIn === null) {
			return null;
		} else if (isSignedIn === true) {
			return (
				<div>
					<form className="ui form" onSubmit={onFormSubmit}>
						<div className="field" style={{textAlign: 'center'}}>
							<label htmlFor="search-bar" style={{padding: '5px'}}>SearchBar Movies</label>
							<input
								onChange={(e) => setTerm(e.target.value)}
								value={term}
								style={{width: '350px'}}
								type="text"
								placeholder="Search movies..."
							/>
						</div>
					</form>
				</div>
			);
		} else {
			return (
				<React.Fragment>
					<Message warning="Please sign in with google to use the search feature"/>
				</React.Fragment>
			);
		}
	};


	return (
		<div>
			{searchBar()}
		</div>
	);
};

export default SearchBar;