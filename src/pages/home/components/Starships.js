import React from 'react';
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react';

export default function Starships() {
	return (
		<div className='ui center aligned sections'>
			<div style={{ margin: '3rem', textAlign: 'center' }}>
				<h2>Popular Starships</h2>
				<hr className='sections-hr'></hr>
			</div>
			<Grid stackable>
				<Grid.Column width={5} className='starship-column'>
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
				<Grid.Column width={5} className='starship-column'>
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
				<Grid.Column width={5} className='starship-column'>
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
				<Grid.Column width={5} className='starship-column'>
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
				<Grid.Column width={5} className='starship-column'>
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
				<Grid.Column width={5} className='starship-column'>
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
