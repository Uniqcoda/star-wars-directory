import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default function Planets() {
	return (
		<div style={{ padding: '0em 8em', fontFamily: 'sans-serif', textAlign: 'center' }}  className='ui center aligned'>
			<div style={{margin: '3rem'}}>
				<h2>Popular Planets</h2>
				<hr style={{ width: '6rem', border: '0.2rem solid #393838' }}></hr>
			</div>
			<Grid stackable columns={3}>
				<Grid.Row>
					<Grid.Column
						style={{
							marginBottom: '20px',
						}}
					>
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
					<Grid.Column
						style={{
							marginBottom: '20px',
						}}
					>
						<Image alt='planet' style={{ height: '28rem', marginRight: '5rem', width: '24rem' }} src='/assets/planet-2.jpg' />
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
					<Grid.Column
						style={{
							marginBottom: '20px',
						}}
					>
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
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}
