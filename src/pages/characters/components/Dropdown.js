import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function Filter() {
	const selectGender = [
		{ key: 'a', text: 'All', value: 'All' },
		{ key: 'm', text: 'Male', value: 'Male' },
		{ key: 'f', text: 'Female', value: 'Female' },
		{ key: 'r', text: 'Robot', value: 'Robot' },
	];

	const [gender, setGender] = useState('all');

	const newGender = event => {
		setGender(event.target.innerText.toLowerCase());
	};
	return (
		<div gender={gender}>
			<span>FILTER </span>
			<Dropdown
				name='gender'
				className='select-gender'
				simple
				item
				options={selectGender}
				defaultValue='All'
				onChange={newGender}
			/>
		</div>
	);
}
