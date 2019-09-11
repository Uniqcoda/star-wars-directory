import React from 'react';
import { Image } from 'semantic-ui-react';

export default function Banner({starship}) {

	return (
		<div
			className='ui inverted vertical aligned segment'
			style={{
				backgroundImage: "url('/assets/starship-1.jpg'), url('/assets/hero-banner.jpg')",
				backgroundPosition: 'center',
				backgroundSize: '800px 600px, cover',
				backgroundRepeat: 'no-repeat',
				width: '100%',
				height: '630px',
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
			<div className='starship-banner-name'>
				<h1 className='banner-bracket'>[</h1>
				<h1 style={{ display: 'inline', padding: '5px' }}>{starship.name}</h1>
				<p className='banner-bracket'>]</p>
			</div>
		</div>
	);
}
