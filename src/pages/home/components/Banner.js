import React from 'react';
import { Image } from 'semantic-ui-react';

import Search from './Search';

export default function Banner({ categories }) {
	return (
		<div
			className='ui inverted vertical aligned segment'
			style={{
				backgroundImage: "url('/assets/hero-banner.jpg')",
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				width: '100%',
				minHeight: '650px',
				padding: '0px',
			}}
		>
			<Image
				src='/assets/logo.png'
				as='a'
				href='/'
				target='_blank'
				style={{ marginTop: '4rem', marginLeft: '3rem', width: '110px' }}
			/>

			<div className='ui text container center aligned' style={{ marginTop: '6em' }}>
				<div>
					<Image src='/assets/logo.png' style={{ width: '110px', marginRight: '15px', display: 'inline' }} />
					<h1
						style={{
							fontSize: '2.5em',
							fontFamily: 'sans-serif',
							display: 'inline',
							color: 'white',
						}}
					>
						Directory
					</h1>
				</div>
				<hr style={{ width: '22rem', border: '0.05rem solid #cfd1d1' }}></hr>

				<h3
					className='ui inverted header'
					style={{
						fontSize: '1.3em',
						fontFamily: 'sans-serif',
						fontWeight: 'normal',
						wordSpacing: '2px',
						color: '#cfd1d1',
					}}
				>
					Find your favorite Characters, Films, Species, Starships and Planets
				</h3>
				<Search categories={categories}></Search>
			</div>
		</div>
	);
}
