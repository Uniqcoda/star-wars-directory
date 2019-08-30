import React from 'react';
import './App.css';

import Banner from './components/Banner';
import Starships from './components/Starships';
import Planets from './components/Planets';
import Characters from './components/Characters';

function App() {
	return (
		<div>
			<Banner></Banner>
			<Starships></Starships>
			<Planets></Planets>
			<Characters></Characters>
		</div>
	);
}

export default App;
