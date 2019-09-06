import React, { useState } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function Search({category}) {
	// const selectCategory = [
	// 	{ key: 'pe', text: 'People', value: 'People' },
	// 	{ key: 'pl', text: 'Planets', value: 'Planets' },
	// 	{ key: 'st', text: 'Starships', value: 'Starships' },
	// ];

	// const [category, setCategory] = useState('people');
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	// const newCategory = event => {
	// 	setCategory(event.target.innerText.toLowerCase());
	// };

	const newQuery = e => {
		setQuery(e.target.value);
	};

	function getID(url) {
		let path = url.split('/');
		let id = path[path.length - 2];
		return `${category}/${id}`;
	}

	function search(e) {
		axios
			.get(`https://swapi.co/api/${category}/?search=${query}`)
			.then(res => {
        let response = res.data.results
        if (response.length < 1) {
          return 'no result found'
        }
        setResults(response);
        console.log(res);
        setQuery('')
			})
			.catch(err => console.log(err)
      );
	}

	return (
		<div className='search-field'>
			<Form>
				<Form.Group>
					{/* <Dropdown
						name='category'
						className='select-category'
						simple
						item
						options={selectCategory}
						defaultValue='People'
						onChange={newCategory}
					/> */}
					<div className='ui icon input' style={{ width: '100%' }}> {/* if you add the category dropdown, change this width to 90% */}
						<i className='search icon'></i>
						<input
							name='query'
							value={query}
							onChange={newQuery}
							onKeyPress={event => {
								if (event.key === 'Enter') {
									search();
								}
							}}
							type='text'
							placeholder='Enter a search term'
						/>
					</div>
				</Form.Group>
			</Form>
			<ul style={{ backgroundColor: 'white' }} className='results'>
				{results
					? results.map((result, index) => (
							<li key={index}>
								<Link to={getID(result.url)}>{result.name}</Link>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
}
