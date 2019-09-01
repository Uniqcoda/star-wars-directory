import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Grid, Button } from 'semantic-ui-react';

export default function Characters() {
	return (
		<div className='ui center aligned sections'>
			<div style={{ margin: '3rem', textAlign: 'center' }}>
				<h2>Popular Characters</h2>
				<hr className='sections-hr'></hr>
			</div>
			<Grid stackable>
				<Grid.Column width={8}>
					<Grid>
						<Grid.Column style={{ padding: '0', marginTop: '1rem' }} width={9}>
							<Image className='character-image' alt='character' src='/assets/character-1.jpg' />
						</Grid.Column>
						<Grid.Column style={{ backgroundColor: '#eeebeb', marginTop: '1rem' }} width={6}>
							<h3 style={{ marginTop: '3rem', marginBottom: '0', fontWeight: '900' }}>Luke Skywalker</h3>
							<p style={{ marginTop: '0', fontSize: '12px', marginBottom: '2rem' }}>
								<em>Son of Anakin</em>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Praesent element...{' '}
								<Link style={{ textDecoration: 'underline', fontWeight: '700', color: '#504e4e' }}>Read More</Link>
							</p>
						</Grid.Column>
					</Grid>
				</Grid.Column>
				<Grid.Column width={8}>
					<Grid>
						<Grid.Column style={{ padding: '0', marginTop: '1rem' }} width={9}>
							<Image className='character-image' alt='character' src='/assets/character-2.jpg' />
						</Grid.Column>
						<Grid.Column style={{ backgroundColor: '#eeebeb', marginTop: '1rem' }} width={6}>
							<h3 style={{ marginTop: '3rem', marginBottom: '0', fontWeight: '900' }}>Luke Skywalker</h3>
							<p style={{ marginTop: '0', fontSize: '12px', marginBottom: '2rem' }}>
								<em>Son of Anakin</em>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Praesent element...{' '}
								<Link style={{ textDecoration: 'underline', fontWeight: '700', color: '#504e4e' }}>Read More</Link>
							</p>
						</Grid.Column>
					</Grid>
				</Grid.Column>
				<Grid.Column width={8}>
					<Grid>
						<Grid.Column style={{ padding: '0', marginTop: '1rem' }} width={9}>
							<Image className='character-image' alt='character' src='/assets/character-3.jpg' />
						</Grid.Column>
						<Grid.Column style={{ backgroundColor: '#eeebeb', marginTop: '1rem' }} width={6}>
							<h3 style={{ marginTop: '3rem', marginBottom: '0', fontWeight: '900' }}>Luke Skywalker</h3>
							<p style={{ marginTop: '0', fontSize: '12px', marginBottom: '2rem' }}>
								<em>Son of Anakin</em>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Praesent element...{' '}
								<Link style={{ textDecoration: 'underline', fontWeight: '700', color: '#504e4e' }}>Read More</Link>
							</p>
						</Grid.Column>
					</Grid>
				</Grid.Column>
				<Grid.Column width={8}>
					<Grid>
						<Grid.Column style={{ padding: '0', marginTop: '1rem' }} width={9}>
							<Image className='character-image' alt='character' src='/assets/character-4.jpg' />
						</Grid.Column>
						<Grid.Column style={{ backgroundColor: '#eeebeb', marginTop: '1rem' }} width={6}>
							<h3 style={{ marginTop: '3rem', marginBottom: '0', fontWeight: '900' }}>Luke Skywalker</h3>
							<p style={{ marginTop: '0', fontSize: '12px', marginBottom: '2rem' }}>
								<em>Son of Anakin</em>
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Praesent element...{' '}
								<Link style={{ textDecoration: 'underline', fontWeight: '700', color: '#504e4e' }}>Read More</Link>
							</p>
						</Grid.Column>
					</Grid>
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
