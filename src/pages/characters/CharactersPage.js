import React, { useState } from 'react';
import { Container, Icon, Button } from 'semantic-ui-react';

import Banner from '../home/components/Banner';
import Characters from '../home/components/Characters';

export default function CharactersPage() {
	const [count, setCount] = useState();
	const categories = ['people'];

	return (
		<div>
			<Banner categories={categories}></Banner>
			<Characters noOfCards={10} dropdown={true} setCount={setCount}></Characters>
			<Container textAlign='center'>
				1 to 10 of {count}
				<Button size='mini' style={{marginLeft: '10px'}}>
					<Icon name='angle left'></Icon>
				</Button>
				<Button size='mini'>
					<Icon name='angle right'></Icon>
				</Button>
			</Container>
		</div>
	);
}
