import React from 'react';
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react';

export default function Starships() {
	return (
		<div style={{ padding: '0em 5em', fontFamily: 'sans-serif' }} className='ui center aligned'>
			<div style={{ margin: '3rem', textAlign: 'center' }}>
				<h2>Popular Starships</h2>
				<hr style={{ width: '6rem', border: '0.2rem solid #393838' }}></hr>
			</div>
			<Grid stackable columns={3}>
				<Grid.Column style={{ marginBottom: '20px', marginRight: '2%', width: '32%' }}>
					<Card centered fluid>
						<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-1.jpg' />
						<Card.Content>
							<Card.Header>Daniel</Card.Header>
							<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
							<button className='ui button' style={{ borderRadius: '0', float: 'right' }}>
								Read More
								<Icon name='arrow right' />
							</button>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column style={{ marginBottom: '20px', marginRight: '2%', width: '32%' }}>
					<Card centered fluid>
						<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-2.jpg' />
						<Card.Content>
							<Card.Header>Daniel</Card.Header>
							<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
							<button className='ui button' style={{ borderRadius: '0', float: 'right' }}>
								Read More
								<Icon name='arrow right' />
							</button>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column style={{ marginBottom: '20px', width: '32%' }}>
					<Card centered fluid>
						<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-3.jpg' />
						<Card.Content>
							<Card.Header>Daniel</Card.Header>
							<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
							<button className='ui button' style={{ borderRadius: '0', float: 'right' }}>
								Read More
								<Icon name='arrow right' />
							</button>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column style={{ marginBottom: '20px', marginRight: '2%', width: '32%' }}>
					<Card centered fluid>
						<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-4.jpg' />
						<Card.Content>
							<Card.Header>Daniel</Card.Header>
							<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
							<button className='ui button' style={{ borderRadius: '0', float: 'right' }}>
								Read More
								<Icon name='arrow right' />
							</button>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column style={{ marginBottom: '20px', marginRight: '2%', width: '32%' }}>
					<Card centered fluid>
						<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-5.jpg' />
						<Card.Content>
							<Card.Header>Daniel</Card.Header>
							<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
							<button className='ui button' style={{ borderRadius: '0', float: 'right' }}>
								Read More
								<Icon name='arrow right' />
							</button>
						</Card.Content>
					</Card>
				</Grid.Column>
				<Grid.Column style={{ marginBottom: '20px', width: '32%' }}>
					<Card centered fluid>
						<Image alt='starship' style={{ height: '16.5rem' }} src='/assets/starship-6.jpg' />
						<Card.Content>
							<Card.Header>Daniel</Card.Header>
							<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
							<button className='ui button' style={{ borderRadius: '0', float: 'right' }}>
								Read More
								<Icon name='arrow right' />
							</button>
						</Card.Content>
					</Card>
				</Grid.Column>
			</Grid>
			<Button style={{ width: '50%', height: '3rem', display: 'block', margin: '3rem auto', border: '0.05rem solid black' }} basic color='black'>
				VIEW MORE
			</Button>
		</div>
	);
}
