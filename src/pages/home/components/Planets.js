import React, { useState, useEffect } from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import axios from 'axios';

import CustomDotGroup from './CustomDotGroup';

export default function Planets() {
	const [planets, setplanets] = useState([
		{
			name: 'Endor',
		},
		{
			name: 'Endor',
		},
		{
			name: 'Endor',
		},
		{
			name: 'Endor',
		},
		{
			name: 'Endor',
		},
		{
			name: 'Endor',
		},
		{
			name: 'Endor',
		},
		{
			name: 'Endor',
		},
		{
			name: 'Endor',
		},
	]);

	useEffect(() => {
		try {
			axios.get('https://swapi.co/api/planets/').then(res => {
				setplanets(res.data.results);
			});
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<div className='ui center aligned sections'>
			<div style={{ margin: '3rem', textAlign: 'center' }}>
				<h2>Popular Planets</h2>
				<hr className='sections-hr'></hr>
			</div>
			<CarouselProvider naturalSlideWidth={1} naturalSlideHeight={0.4} totalSlides={3}>
				<Slider>
					<Slide index={0}>
						<Grid columns={3}>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-1.jpg' />
								<p className='planet-name'>{planets[0].name}</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-2.jpg' />
								<p className='planet-name'>{planets[1].name}</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-3.jpg' />
								<p className='planet-name'>{planets[2].name}</p>
							</Grid.Column>
						</Grid>
					</Slide>
					<Slide index={1}>
						<Grid stackable columns={3}>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-1.jpg' />
								<p className='planet-name'>{planets[3].name}</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-2.jpg' />
								<p className='planet-name'>{planets[4].name}</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-3.jpg' />
								<p className='planet-name'>{planets[5].name}</p>
							</Grid.Column>
						</Grid>
					</Slide>
					<Slide index={3}>
						<Grid stackable columns={3}>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-1.jpg' />
								<p className='planet-name'>{planets[6].name}</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-2.jpg' />
								<p className='planet-name'>{planets[7].name}</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-3.jpg' />
								<p className='planet-name'>{planets[8].name}</p>
							</Grid.Column>
						</Grid>
					</Slide>
				</Slider>
				<CustomDotGroup slides={3} size='small' />
			</CarouselProvider>
		</div>
	);
}
