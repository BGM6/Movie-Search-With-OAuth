import React from 'react';
import '../components/style/gridBox.css';
import {Card} from 'react-bootstrap';

const ShowMovies = (props) => {
	let movieInfo;
	try {
		movieInfo = props.movieList.map(({Title, imdbID, Year, Poster,}) => {
			return (
				<div className="box"  key={imdbID}>
					<Card>
						<Card.Img id="poster" src={Poster} alt={Title} className="w-100"/>
						<Card.Body>
							<Card.Title>{Title}</Card.Title>
							<Card.Text>
								Released: {Year}
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			);
		});
	} catch (e) {
		return (
			<div style={{textAlign: 'center', padding: '3rem'}}>
				<h3 style={{color: 'black'}}>Sorry, No results found <i className="fas fa-sad-cry"/></h3>
			</div>
		);
	}

	return (
		<div className="container">{movieInfo}</div>
	);
};

export default ShowMovies;