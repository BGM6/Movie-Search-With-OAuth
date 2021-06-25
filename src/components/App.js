import {useState, useEffect} from 'react';
import omdbMovie from './apis/omdbMovie';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './pages/About';
import Social from './pages/Social';
import SearchBar from './SearchBar';
import Navbar from './Navbar';

const App = () => {
	const [movies, setMovies] = useState([]);

	const onTermSearch = async term => {
		const {data} = await omdbMovie.get('', {
			params: {
				s: term,
				apiKey: '5e970758',
			}
		});
		setMovies(data.Search);
	};
	console.log(movies);
	return (
		<div className="ui container" style={{margin: '1rem'}}>
			<BrowserRouter>
				<div>
					<Navbar/>
					<Route
						path="/" exact
						render={props => <SearchBar {...props} onSubmitProp={onTermSearch}/>}/>
					<Route path="/about" component={About}/>
					<Route path="/social" component={Social}/>
				</div>
			</BrowserRouter>

		</div>
	);
};

export default App;