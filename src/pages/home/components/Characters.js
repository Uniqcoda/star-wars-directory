import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Image, Grid, Button, Divider } from 'semantic-ui-react';
import axios from 'axios';

 function Characters({ history, noOfCards, setCount, viewMore }) {
	const [people, setPeople] = useState([]);
	const images = [
		'/assets/character-1.jpg',
		'/assets/character-2.jpg',
		'/assets/character-3.jpg',
		'/assets/character-4.jpg',
	];

	const [url, setUrl] = useState('https://swapi.co/api/people/');
	const [previousUrl, setPreviousUrl] = useState('');
	const [nextUrl, setNextUrl] = useState('');

	useEffect(() => {
		try {
			axios.get(url).then(res => {
				setPeople(res.data.results);
				setCount(res.data.count);
				setPreviousUrl(res.data.previous);
				setNextUrl(res.data.next);
			});
		} catch (err) {
			console.log(err);
		}
	}, [setCount, url]);

	function getID(url) {
		let path = url.split('/');
		let id = path[path.length - 2];
		return `people/${id}`;
	}

	function redirect() {
		history.push('/character');
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
												<Image className='character-image' alt='character' src={index > 3 ? images[index % 4] : images[index]} />
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
			{viewMore ? (
				<Button
					onClick={redirect}
					style={{ width: '50%', height: '3rem', display: 'block', margin: '3rem auto', border: '0.05rem solid black' }}
					basic
					color='black'
				>
					VIEW MORE
				</Button>
			) : null}
		</div>
	);
}

export default withRouter(Characters);
