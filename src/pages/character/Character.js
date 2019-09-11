import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Body from './components/Body';
import axios from 'axios';

export default function Character() {
	const [character, setCharacter] = useState({});

	function getID() {
		let pathname = window.location.pathname;
		let arr = pathname.split('/');

		return arr[arr.length - 1];
	}

	let characterId = getID();

	useEffect(() => {
		try {
			axios.get(`https://swapi.co/api/people/${characterId}/`).then(res => {
				setCharacter(res.data);
			});
		} catch (err) {
			return err;
		}
	}, [characterId]);
	return (
		<div>
			<Banner character={character}></Banner>
			<section>
				<Body character={character}></Body>
			</section>
		</div>
	);
}
