import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Banner from './components/Banner';
import Starships from './components/Starships';
import Planets from './components/Planets';
import Characters from './components/Characters';

function App() {
	return (
		<Router>
			<Banner></Banner>
			<section>
				<Starships></Starships>
			</section>
			<section>
				<Planets></Planets>
			</section>
			<section>
				<Characters></Characters>
			</section>
		</Router>
	);
}

export default App;
