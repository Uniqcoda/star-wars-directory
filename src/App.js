import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './pages/home/components/Footer';

import Home from './pages/home/Home';
import Starship from './pages/starship/Starship';
import StarshipsPage from './pages/starships/StarshipsPage';
import CharactersPage from './pages/starships/CharactersPage';

function App() {
	return (
		<Router>
			<Route path='/' exact component={Home}></Route>
			<Route path='/starship' component={Starship}></Route>
			<Route path='/starships' component={StarshipsPage}></Route>
			<Route path='/characters' component={CharactersPage}></Route>
			<Footer></Footer>
		</Router>
	);
}

export default App;
