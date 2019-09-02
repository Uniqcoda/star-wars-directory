import React from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

export default function Search() {
	const selectCategory = [
		{ key: 'pe', text: 'People', value: 'People' },
		{ key: 'pl', text: 'Planet', value: 'Planet' },
		{ key: 'st', text: 'Starship', value: 'Starship' },
	];
	return (
		<div className='search-category'>
			<Form>
				<Form.Group>
					<Dropdown className='select-category' simple item options={selectCategory} defaultValue='People' />
					<div className='ui icon input' style={{ width: '90%' }}>
						<i className='search icon'></i>
						<input className='prompt' type='text' placeholder='Enter a search term' />
					</div>
				</Form.Group>
			</Form>
			<div className='results'></div>
		</div>
	);
}
