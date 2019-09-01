import React from 'react';
import { Image } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Divider } from "semantic-ui-react";


import CustomDotGroup from './CustomDotGroup';

export default function Planets() {
	return (
		<div style={{ padding: '0em 8em', fontFamily: 'sans-serif', textAlign: 'center' }} className='ui center aligned'>
			<div style={{ margin: '3rem' }}>
				<h2>Popular Planets</h2>
				<hr style={{ width: '6rem', border: '0.2rem solid #393838' }}></hr>
			</div>
			<CarouselProvider visibleSlides={3} naturalSlideWidth={1} naturalSlideHeight={1} totalSlides={6}>
				<Slider
					stackable
					style={{
						marginBottom: '20px',
					}}
				>
					<Slide tag='a' index={0}>
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
					</Slide>
					<Slide tag='a' index={1}>
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
					</Slide>
					<Slide tag='a' index={2}>
						<Image alt='planet' style={{ height: '28rem', width: '24rem' }} src='/assets/planet-3.jpg' />
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
					</Slide>
				</Slider>
				<Divider hidden></Divider>
				<CustomDotGroup slides={3} />
			</CarouselProvider>
		</div>
	);
}
