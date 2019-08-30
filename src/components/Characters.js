import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default function Characters() {
	return (
		<div style={{ padding: '0em 6.5em' }} className='ui vertical center aligned segment'>
			<div style={{ margin: '3rem' }}>
				<h2>Popular Characters</h2>
				<hr style={{ width: '6rem', border: '0.2rem solid #393838' }}></hr>
			</div>
			<Grid>
				<Grid.Row>
					<Grid.Column width={8}>
						<Image alt='character' style={{ height: '25rem', width: '24rem' }} src='/assets/character-1.jpg' />
					</Grid.Column>
					<Grid.Column width={8}>
						<Image alt='character' style={{ height: '25rem', width: '24rem' }} src='/assets/character-2.jpg' />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
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
				</Grid.Row>
			</Grid>
		</div>

		//   <div className="ui three stackable cards">
		//       <Card>
		//   <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
		//   <Card.Content>
		//     <Card.Header>Daniel</Card.Header>
		//     <Card.Meta>Joined in 2016</Card.Meta>
		//     <Card.Description>
		//       Daniel is a comedian living in Nashville.
		//     </Card.Description>
		//   </Card.Content>
		//   <Card.Content extra>
		//     <a href='/'>
		//       <Icon name='user' />
		//       10 Friends
		//     </a>
		//   </Card.Content>
		// </Card>
		// <Card>
		//   <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
		//   <Card.Content>
		//     <Card.Header>Daniel</Card.Header>
		//     <Card.Meta>Joined in 2016</Card.Meta>
		//     <Card.Description>
		//       Daniel is a comedian living in Nashville.
		//     </Card.Description>
		//   </Card.Content>
		//   <Card.Content extra>
		//     <a href='/'>
		//       <Icon name='user' />
		//       10 Friends
		//     </a>
		//   </Card.Content>
		// </Card>
		// <Card>
		//   <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
		//   <Card.Content>
		//     <Card.Header>Daniel</Card.Header>
		//     <Card.Meta>Joined in 2016</Card.Meta>
		//     <Card.Description>
		//       Daniel is a comedian living in Nashville.
		//     </Card.Description>
		//   </Card.Content>
		//   <Card.Content extra>
		//     <a href='/'>
		//       <Icon name='user' />
		//       10 Friends
		//     </a>
		//   </Card.Content>
		// </Card>
		// <Card>
		//   <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
		//   <Card.Content>
		//     <Card.Header>Daniel</Card.Header>
		//     <Card.Meta>Joined in 2016</Card.Meta>
		//     <Card.Description>
		//       Daniel is a comedian living in Nashville.
		//     </Card.Description>
		//   </Card.Content>
		//   <Card.Content extra>
		//     <a href='/'>
		//       <Icon name='user' />
		//       10 Friends
		//     </a>
		//   </Card.Content>
		// </Card>
		// <Card>
		//   <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
		//   <Card.Content>
		//     <Card.Header>Daniel</Card.Header>
		//     <Card.Meta>Joined in 2016</Card.Meta>
		//     <Card.Description>
		//       Daniel is a comedian living in Nashville.
		//     </Card.Description>
		//   </Card.Content>
		//   <Card.Content extra>
		//     <a href='/'>
		//       <Icon name='user' />
		//       10 Friends
		//     </a>
		//   </Card.Content>
		// </Card>
		// <Card>
		//   <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
		//   <Card.Content>
		//     <Card.Header>Daniel</Card.Header>
		//     <Card.Meta>Joined in 2016</Card.Meta>
		//     <Card.Description>
		//       Daniel is a comedian living in Nashville.
		//     </Card.Description>
		//   </Card.Content>
		//   <Card.Content extra>
		//     <a href='/'>
		//       <Icon name='user' />
		//       10 Friends
		//     </a>
		//   </Card.Content>
		// </Card>

		//   </div>
	);
}
