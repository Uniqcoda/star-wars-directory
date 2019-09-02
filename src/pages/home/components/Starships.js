import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Grid, Button, Divider } from 'semantic-ui-react';
import axios from 'axios';

export default function Starships() {
	const [starships, setStarships] = useState([]);
	const images = [
		'/assets/starship-2.jpg',
		'/assets/starship-1.jpg',
		'/assets/starship-3.jpg',
		'/assets/starship-4.jpg',
		'/assets/starship-5.jpg',
		'/assets/starship-6.jpg',
	];

	useEffect(() => {
		try {
			axios.get('https://swapi.co/api/starships/').then(res => {
				setStarships(res.data.results);
			});
		} catch (err) {
			console.log(err);
		}
	}, []);

	function getID(url) {
		let path = url.split('/');
		let id = path[path.length - 2];
		return `starships/${id}`;
	}

	return (
		<div className='ui center aligned sections'>
			<div style={{ margin: '3rem', textAlign: 'center' }}>
				<h2>Popular Starships</h2>
				<hr className='sections-hr'></hr>
			</div>
			<Grid stackable columns={3}>
				{starships
					? starships.map((starship, index) => {
							return (
								<Grid.Column key={index}>
									<Card centered fluid>
										<Image
											alt='starship'
											style={{ height: '16.5rem' }}
											src={index > 5 ? images[index % 6] : images[index]}
										/>
										<Card.Content>
											<Card.Header>{starship.name}</Card.Header>
											<Card.Description>
												<p>
													Model: <strong>{starship.model}</strong>
												</p>
												<p>
													Cargo Capacity: <strong>{starship.cargo_capacity}</strong>
												</p>
											</Card.Description>
											<Link to={getID(starship.url)} className='ui button starship-button'>
												Read More
												<Icon name='arrow right' />
											</Link>
										</Card.Content>
									</Card>
								</Grid.Column>
							);
					  })
					: null}
			</Grid>
			<Divider hidden></Divider>
			<Button
				style={{ width: '50%', height: '3rem', display: 'block', margin: '3rem auto', border: '0.05rem solid black' }}
				basic
				color='black'
			>
				VIEW MORE
			</Button>
		</div>
	);
}
