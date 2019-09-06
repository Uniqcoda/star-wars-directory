import React, { useState } from 'react';
import Banner from './components/Banner';
import Starships from './components/Starships';
import Planets from './components/Planets';
import Characters from './components/Characters';

export default function Home() {
	const [count, setCount] = useState();

	return (
		<div>
			<Banner></Banner>
			<section>
				<Starships noOfCards={6} setCount={setCount} viewMore={true}></Starships>
			</section>
			<section>
				<Planets></Planets>
			</section>
			<section>
				<Characters noOfCards={4} setCount={setCount} viewMore={true}></Characters>
			</section>
		</div>
	);
}
