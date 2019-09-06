import React, { useState } from 'react';
import { Container, Icon, Button } from 'semantic-ui-react';

import Banner from '../home/components/Banner';
import Starships from '../home/components/Starships'

export default function StarshipsPage() {  
	const [count, setCount] = useState();

  return (
    <div>
      <Banner category={'starships'}></Banner>
      <Starships noOfCards={10} setCount={setCount}></Starships>
      <Container textAlign='center'>1 to 10 of {count}				<Button size='mini'>
					<Icon name='angle left'></Icon>
				</Button>
				<Button size='mini'>
					<Icon name='angle right'></Icon>
				</Button></Container>

    </div>
  )
}
