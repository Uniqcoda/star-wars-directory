import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CustomDotGroup from './CustomDotGroup';

export default function Planets() {
	return (
		<div className='ui center aligned sections'>
			<div style={{ margin: '3rem', textAlign: 'center' }}>
				<h2>Popular Planets</h2>
				<hr className='sections-hr'></hr>
			</div>
			<CarouselProvider naturalSlideWidth={1} naturalSlideHeight={0.4} totalSlides={3}>
				<Slider>
					<Slide tag='a' index={0}>
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
					</Slide>
				</Slider>
				<CustomDotGroup slides={3} size='small' />
			</CarouselProvider>
		</div>
	);
}
