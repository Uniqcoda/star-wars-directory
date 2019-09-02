import React, { useState, useEffect } from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import axios from 'axios';

import CustomDotGroup from './CustomDotGroup';

export default function Planets() {
	const [planets, setplanets] = useState([]);
	// const [slideIndex, setSlideIndex] = useState(0);
let slideIndex = 0;

	const images = ['/assets/planet-1.jpg', '/assets/planet-2.jpg', '/assets/planet-3.jpg'];

	useEffect(() => {
		try {
			axios.get('https://swapi.co/api/planets/').then(res => {
				setplanets(res.data.results);
			});
		} catch (err) {
			console.log(err);
		}
	}, []);

	function noOfSlides() {
		if (planets.length && planets.length % 3) {
			return Math.trunc(planets.length / 3) + 1;
		} else if (planets.length && planets.length % 3 === 0) {
			return planets.length / 3;
		}
		return 1;
	}

	// function slideIndex(index) {
	// 	if (index > 2 && (Math.trunc(index / 3)> slideIndex)) {
	// 		slideIndex += (Math.trunc(index / 3));
	// 	}
	// }

	return (
		<div className='ui center aligned sections'>
			<div style={{ margin: '3rem', textAlign: 'center' }}>
				<h2>Popular Planets</h2>
				<hr className='sections-hr'></hr>
			</div>
			<CarouselProvider naturalSlideWidth={1} naturalSlideHeight={0.4} totalSlides={noOfSlides()}>
				<Slider>
					<Slide index={slideIndex}>
						<Grid columns={3}>
							{planets
								? planets.map((planet, index) => {
									if (index > 2 && (Math.trunc(index / 3)> slideIndex)) {
										slideIndex += (Math.trunc(index / 3));
									}
										return (
											<Grid.Column key={index}>
												<Image
													alt='planet'
													className='planet-image'
													src={index > 2 ? images[index % 3] : images[index]}
												/>
												<p className='planet-name'>{planet.name}</p>
											</Grid.Column>
										);
								  })
								: null}
						</Grid>
					</Slide>
					{/* <Slide tag='a' index={0}>
						<Grid columns={3}>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-1.jpg' />
								<p className='planet-name'>Corelia</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-2.jpg' />
								<p className='planet-name'>Ord Mantell</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-3.jpg' />
								<p className='planet-name'>Endor</p>
							</Grid.Column>
						</Grid>
					</Slide>
					<Slide tag='a' index={1}>
						<Grid stackable columns={3}>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-1.jpg' />
								<p className='planet-name'>Corelia</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-2.jpg' />
								<p className='planet-name'>Ord Mantell</p>
							</Grid.Column>
							<Grid.Column>
								<Image alt='planet' className='planet-image' src='/assets/planet-3.jpg' />
								<p className='planet-name'>Endor</p>
							</Grid.Column>
						</Grid>
					</Slide> */}
				</Slider>
				<CustomDotGroup slides={3} size='small' />
			</CarouselProvider>
		</div>
	);
}
