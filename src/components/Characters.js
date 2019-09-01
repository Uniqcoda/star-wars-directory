import React from 'react';
import { Image, Grid, Button } from 'semantic-ui-react';

export default function Characters() {
	return (
		<div style={{ padding: '0em 6.5em', fontFamily: 'sans-serif' }} className='ui center aligned'>
			<div style={{ margin: '3rem', textAlign: 'center' }}>
				<h2>Popular Characters</h2>
				<hr style={{ width: '6rem', border: '0.2rem solid #393838' }}></hr>
			</div>
			<Grid stackable>
				<Grid.Column width={8}>
					<Image alt='character' style={{ height: '25rem', width: '24rem' }} src='/assets/character-1.jpg' />
				</Grid.Column>
				<Grid.Column width={8}>
					<Image alt='character' style={{ height: '25rem', width: '24rem' }} src='/assets/character-2.jpg' />
				</Grid.Column>
				<Grid.Column width={8}>
					<Image
						alt='character'
						style={{ height: '25rem', width: '24rem', position: 'center' }}
						src='/assets/character-3.jpg'
					/>
				</Grid.Column>
				<Grid.Column width={8}>
					<Image alt='character' style={{ height: '25rem', width: '24rem' }} src='/assets/character-4.jpg' />
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
