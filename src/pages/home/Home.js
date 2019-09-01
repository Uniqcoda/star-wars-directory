import React from 'react';
import Banner from './components/Banner';
import Starships from './components/Starships';
import Planets from './components/Planets';
import Characters from './components/Characters';
import Footer from './components/Footer';

export default function Home() {
	return (
		<div>
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
			<section>
				<Footer></Footer>
			</section>
		</div>
	);
}
