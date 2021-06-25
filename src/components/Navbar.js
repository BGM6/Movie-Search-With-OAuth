import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Navbar = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link className="item" to="/">Search</Link>
			<Link className="item" to="/social">Social</Link>
			<Link className="item" to="/about">About</Link>
			<div className="right menu">
				<GoogleAuth/>
			</div>
		</div>
	);
};

export default Navbar;