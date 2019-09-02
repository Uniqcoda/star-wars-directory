import React from 'react';
import { Image, Grid, Card, Icon } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import CustomDotGroup from '../../home/components/CustomDotGroup';
export default function Recent() {
	return (
		<div className='ui center aligned sections'>
			<h1 className='recently-viewed-header'>Recently Viewed Starships</h1>
			<hr className='recent-hr '></hr>
			<CarouselProvider naturalSlideWidth={1} naturalSlideHeight={0.4} totalSlides={3}>
				<Slider>
					<Slide index={0}>
						<Grid columns={3}>
							<Grid.Column className='starship-column'>
								<Card centered fluid>
									<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-4.jpg' />
									<Card.Content>
										<Card.Header>Daniel</Card.Header>
										<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
										<button className='ui button starship-button'>
											Read More
											<Icon name='arrow right' />
										</button>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column className='starship-column'>
								<Card centered fluid>
									<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-5.jpg' />
									<Card.Content>
										<Card.Header>Daniel</Card.Header>
										<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
										<button className='ui button starship-button'>
											Read More
											<Icon name='arrow right' />
										</button>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column className='starship-column'>
								<Card centered fluid>
									<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-6.jpg' />
									<Card.Content>
										<Card.Header>Daniel</Card.Header>
										<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
										<button className='ui button starship-button'>
											Read More
											<Icon name='arrow right' />
										</button>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid>
					</Slide>
					<Slide index={1}>
						<Grid columns={3}>
							<Grid.Column className='starship-column'>
								<Card centered fluid>
									<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-1.jpg' />
									<Card.Content>
										<Card.Header>Daniel</Card.Header>
										<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
										<button className='ui button starship-button'>
											Read More
											<Icon name='arrow right' />
										</button>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column className='starship-column'>
								<Card centered fluid>
									<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-2.jpg' />
									<Card.Content>
										<Card.Header>Daniel</Card.Header>
										<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
										<button className='ui button starship-button'>
											Read More
											<Icon name='arrow right' />
										</button>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column className='starship-column'>
								<Card centered fluid>
									<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-3.jpg' />
									<Card.Content>
										<Card.Header>Daniel</Card.Header>
										<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
										<button className='ui button starship-button'>
											Read More
											<Icon name='arrow right' />
										</button>
									</Card.Content>
								</Card>
							</Grid.Column>
						</Grid>
					</Slide>
				</Slider>
				<CustomDotGroup slides={3} size='small' />
			</CarouselProvider>
		</div>
	);
}
