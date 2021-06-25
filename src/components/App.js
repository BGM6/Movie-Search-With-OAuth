import '../components/style/style.css';
import {useState} from 'react';
import omdbMovie from './apis/omdbMovie';
import {Router, Route} from 'react-router-dom';
import About from './pages/About';
import Social from './pages/Social';
import SearchBar from './SearchBar';
import ShowMovies from './ShowMovies';
import Navbar from './Navbar';
import history from '../history';

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

	return (
		<div className="ui container" style={{margin: '1rem'}}>
			<Router history={history}>
				<div>
					<Navbar/>
					<Route
						path="/" exact
						render={props =>
							<SearchBar {...props} onSubmitProp={onTermSearch}/>}
					/>
					<Route path="/" exact render={props => <ShowMovies {...props} movieList={movies}/>}/>
					<Route path="/about" component={About}/>
					<Route path="/social" component={Social}/>
				</div>
			</Router>
		</div>
	);
};

export default App;