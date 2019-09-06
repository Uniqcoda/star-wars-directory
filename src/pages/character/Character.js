import React from 'react';
import Banner from './components/Banner';
import Body from './components/Body';
import Recent from './components/Recent';

export default function Character() {
	return (
		<div>
			<Banner></Banner>
			<section>
				<Body></Body>
			</section>
			{/* <section>
				<Recent></Recent>
			</section> */}
		</div>
	);
}

