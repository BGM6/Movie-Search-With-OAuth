import React from 'react';

const About = () => {
	return(

		<div className="ui centered card">
			<div className="image"  style={{margin: '1rem'}}>
				<img
					src="https://live.staticflickr.com/619/22453011456_f3775b2dcc_b.jpg"
					alt="avatar"/>
				<p style={{padding: '5px'}} className="header">Bryan Guilas</p>
				<div className="meta" style={{padding: '5px'}}>
					<span className="date">Full Stack Developer</span>
				</div>
				<div className="description" style={{padding: '5px'}}>
					Hello! I'm Bryan and this is my dog Niko!
				</div>
			</div>
			<div className="extra content">
				<a href="https://www.bryanjguilas.com/" target="_blank" rel="noreferrer">
					<p> Personal Portfolio</p>
				</a>
			</div>
		</div>
	);
}

export default About;