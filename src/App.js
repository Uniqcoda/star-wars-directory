import React from 'react';
import './App.css';

import Banner from './components/Banner';
import Starships from './components/Starships';
import Planets from './components/Planets';

function App() {
	return (
		<div>
			<Banner></Banner>
			<Starships></Starships>
			<Planets></Planets>
		</div>
	);
}

export default App;
