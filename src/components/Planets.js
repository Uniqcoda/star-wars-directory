import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CustomDotGroup from './CustomDotGroup';

export default function Planets() {
	return (
		<div style={{ padding: '0em 8em', fontFamily: 'sans-serif', textAlign: 'center' }} className='ui center aligned'>
			<div style={{ margin: '3rem' }}>
				<h2>Popular Planets</h2>
				<hr style={{ width: '6rem', border: '0.2rem solid #393838' }}></hr>
			</div>
			<CarouselProvider naturalSlideWidth={1} naturalSlideHeight={0.5} totalSlides={3}>
				<Slider>
					<Slide tag='a' index={0}>
						<Grid columns={3}>
							<Grid.Column>
								<Image 
									alt='planet'
									style={{ height: '28rem', marginRight: '5rem', width: '24rem' }}
									src='/assets/planet-1.jpg'
								/>
								<p
									style={{
										fontSize: '2em',
										fontFamily: 'sans-serif',
										fontWeight: '700px',
										color: 'white',
										position: 'absolute',
										top: '90%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									Corelia
								</p>
							</Grid.Column>
							<Grid.Column>
								<Image 
									alt='planet'
									style={{ height: '28rem', marginRight: '5rem', width: '24rem' }}
									src='/assets/planet-2.jpg'
								/>
								<p
									style={{
										fontSize: '2em',
										fontFamily: 'sans-serif',
										fontWeight: '700px',
										color: 'white',
										position: 'absolute',
										top: '90%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									Ord Mantell
								</p>
							</Grid.Column>
							<Grid.Column>
								<Image  alt='planet' style={{ height: '28rem', width: '24rem' }} src='/assets/planet-3.jpg' />
								<p
									style={{
										fontSize: '2em',
										fontFamily: 'sans-serif',
										fontWeight: '700px',
										color: 'white',
										position: 'absolute',
										top: '90%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									Endor
								</p>
							</Grid.Column>
						</Grid>
					</Slide>
					<Slide tag='a' index={1}>
						<Grid stackable columns={3}>
							<Grid.Column>
								<Image 
									alt='planet'
									style={{ height: '28rem', marginRight: '5rem', width: '24rem' }}
									src='/assets/planet-1.jpg'
								/>
								<p
									style={{
										fontSize: '2em',
										fontFamily: 'sans-serif',
										fontWeight: '700px',
										color: 'white',
										position: 'absolute',
										top: '90%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									Corelia
								</p>
							</Grid.Column>
							<Grid.Column>
								<Image 
									alt='planet'
									style={{ height: '28rem', marginRight: '5rem', width: '24rem' }}
									src='/assets/planet-2.jpg'
								/>
								<p
									style={{
										fontSize: '2em',
										fontFamily: 'sans-serif',
										fontWeight: '700px',
										color: 'white',
										position: 'absolute',
										top: '90%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									Ord Mantell
								</p>
							</Grid.Column>
							<Grid.Column>
								<Image  alt='planet' style={{ height: '28rem', width: '24rem' }} src='/assets/planet-3.jpg' />
								<p
									style={{
										fontSize: '2em',
										fontFamily: 'sans-serif',
										fontWeight: '700px',
										color: 'white',
										position: 'absolute',
										top: '90%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									Endor
								</p>
							</Grid.Column>
						</Grid>
					</Slide>
				</Slider>
				<CustomDotGroup slides={3} size='small' />
			</CarouselProvider>
		</div>
	);
}
