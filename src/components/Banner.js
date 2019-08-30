import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Form, Button, Icon } from 'semantic-ui-react';

export default function Banner() {
	return (
		<div
			className='ui inverted vertical aligned segment'
			style={{
				backgroundImage: "url('/assets/hero-banner.jpg')",
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				width: '100%',
				minHeight: '600px',
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
					<h2
						style={{
							fontSize: '2.5em',
							fontFamily: 'sans-serif',
              display: 'inline',
						}}
					>
						Directory
					</h2>
				</div>
				<hr style={{ width: '300px' }}></hr>

				<h3
					style={{
						fontSize: '1.3em',
						fontFamily: 'sans-serif',
						fontWeight: 'normal',
						width: '35rem',
						marginLeft: '100px',
						wordSpacing: '2px',
						color: '#cfd1d1',
					}}
				>
					Find your favorite Characters, Films, Species, Starships and Planets
				</h3>
				<div class='ui icon input' style={{ width: '50rem', height: '4rem' }}>
					<input class='prompt' type='text' placeholder='Enter a search term' />
					<i class='search icon'></i>
				</div>
				<div class='results'></div>
			</div>
		</div>
	);
}
