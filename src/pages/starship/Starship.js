import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Body from './components/Body';
import Recent from './components/Recent';
import axios from 'axios';

export default function Starship() {
	const [starship, setStarship] = useState({});

	function getID() {
		let pathname = window.location.pathname;
		let arr = pathname.split('/');

		return arr[arr.length - 1];
	}

	let starshipId = getID();

	useEffect(() => {
		try {
			axios.get(`https://swapi.co/api/starships/${starshipId}/`).then(res => {
				setStarship(res.data);
			});
		} catch (err) {
			return err;
		}
	}, [starshipId]);

	return (
		<div>
			<Banner starship={starship}></Banner>
			<section>
				<Body starship={starship}></Body>
			</section>
			<section>
				<Recent></Recent>
			</section>
		</div>
	);
}
