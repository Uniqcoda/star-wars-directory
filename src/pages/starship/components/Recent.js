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
										<Card.Header>Sentinel-class landing craft</Card.Header>
										<Card.Description>
											<p>
												Model: <strong>Sentinel-class landing craft</strong>
											</p>
											<p>
												Cargo Capacity: <strong>180000</strong>
											</p>
										</Card.Description>
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
										<Card.Header>EF76 Nebulon-B escort frigate</Card.Header>
										<Card.Description><p>
														Model: <strong>EF76 Nebulon-B escort frigate</strong>
													</p>
													<p>
														Cargo Capacity: <strong>6000000</strong>
													</p></Card.Description>
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
										<Card.Header>Slave 1</Card.Header>
										<Card.Description><p>
														Model: <strong>Firespray-31-class patrol and attack</strong>
													</p>
													<p>
														Cargo Capacity: <strong>70000</strong>
													</p></Card.Description>
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
										<Card.Header>Imperial shuttle</Card.Header>
										<Card.Description><p>
														Model: <strong>Lambda-class T-4a shuttle</strong>
													</p>
													<p>
														Cargo Capacity: <strong>80000</strong>
													</p></Card.Description>
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
										<Card.Header>TIE Advanced x1</Card.Header>
										<Card.Description><p>
														Model: <strong>Twin Ion Engine Advanced x1</strong>
													</p>
													<p>
														Cargo Capacity: <strong>150</strong>
													</p></Card.Description>
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
										<Card.Header>X-wing</Card.Header>
										<Card.Description><p>
														Model: <strong>T-65 X-wing</strong>
													</p>
													<p>
														Cargo Capacity: <strong>110</strong>
													</p></Card.Description>
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
