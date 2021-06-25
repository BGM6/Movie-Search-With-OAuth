import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import Social from '../components/pages/Social';

const Navbar = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link className="item" to="/">Search</Link>
			<Link className="item" to="/about">About</Link>
				<Social/>
			<div className="right menu">
				<GoogleAuth/>
			</div>
		</div>
	);
};

export default Navbar;