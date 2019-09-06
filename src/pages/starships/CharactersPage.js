import React, { useState } from 'react';
import { Container, Icon, Button } from 'semantic-ui-react';

import Banner from '../home/components/Banner';
import Characters from '../home/components/Characters';

export default function CharactersPage() {
	const [count, setCount] = useState();

	return (
		<div>
			<Banner category={'people'}></Banner>
			<Characters noOfCards={10} setCount={setCount}></Characters>
			<Container textAlign='center'>
				1 to 10 of {count}
				<Button size='mini'>
					<Icon name='angle left'></Icon>
				</Button>
				<Button size='mini'>
					<Icon name='angle right'></Icon>
				</Button>
			</Container>
		</div>
	);
}
