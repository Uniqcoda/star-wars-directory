import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Button, Divider } from 'semantic-ui-react';
import axios from 'axios';

export default function Characters() {
	const [people, setPeople] = useState([]);
	const images = [
		'/assets/character-1.jpg',
		'/assets/character-2.jpg',
		'/assets/character-3.jpg',
		'/assets/character-4.jpg',
	];
	const [noOfCards, setNoOfCards] = useState(4)

	useEffect(() => {
		try {
			axios.get('https://swapi.co/api/people/').then(res => {
				setPeople(res.data.results);
			});
		} catch (err) {
			console.log(err);
		}
	}, []);

	function getID(url) {
		let path = url.split('/');
		let id = path[path.length - 2];
		return `people/${id}`;
	}

	function mapImage(index, gender) {
		if (index > 3) {
			return images[index % 4];
		}
		return images[index];
	}

	function viewMore() {
		setNoOfCards(10)
	}

	return (
		<div className='ui center aligned sections'>
			<div style={{ margin: '3rem', textAlign: 'center' }}>
				<h2>Popular Characters</h2>
				<hr className='sections-hr'></hr>
			</div>
			<Grid stackable columns={2}>
				{people
					? people.map((person, index) => {
							if (index < noOfCards) {
								return (
									<Grid.Column key={index}>
										<Grid>
											<Grid.Column style={{ padding: '0', marginTop: '1rem' }} width={9}>
												<Image className='character-image' alt='character' src={mapImage(index, person.gender)} />
											</Grid.Column>
											<Grid.Column style={{ backgroundColor: '#eeebeb', marginTop: '1rem' }} width={6}>
												<h3 style={{ marginTop: '3rem', marginBottom: '0', fontWeight: '900' }}>{person.name}</h3>
												<p style={{ marginTop: '0', fontSize: '12px', marginBottom: '2rem' }}>
													<em>
														{person.gender}, {person.birth_year}
													</em>
												</p>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
													labore et dolore magna aliqua. Praesent element...
													<Link
														to={getID(person.url)}
														style={{ textDecoration: 'underline', fontWeight: '700', color: '#504e4e' }}
													>
														Read More
													</Link>
												</p>
											</Grid.Column>
										</Grid>
									</Grid.Column>
								);
							}
							return null;
					  })
					: null}
			</Grid>
			<Divider hidden></Divider>
			<Button onClick={viewMore}
				style={{ width: '50%', height: '3rem', display: 'block', margin: '3rem auto', border: '0.05rem solid black' }}
				basic
				color='black'
			>
				VIEW MORE
			</Button>
		</div>
	);
}
