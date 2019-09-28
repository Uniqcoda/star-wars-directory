import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default function Search({ categories }) {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);

	const newQuery = e => {
		setQuery(e.target.value);
	};

	function getID(url) {
		let path = url.split('/');
		let id = path[path.length - 2];
		let str = path[path.length - 3];
		let category = str.substring(0, str.length);
		return { url: `${category}/${id}`, category };
	}

	function search(e) {
		setLoading(true);
		categories.forEach(category => {
			axios
				.get(`https://swapi.co/api/${category}/?search=${query}`)
				.then(res => {
					let response = res.data.results;
					if (response.length < 1) {
						return 'no result found';
					}
					setResults(response);
					setQuery('');
					setLoading(false);
				})
				.catch(err => err);
		});
	}

	return (
		<div className='search-field'>
			<Form>
				<Form.Group>
					<div className='ui icon input' style={{ width: '100%' }}>
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
			<ul style={{ backgroundColor: 'white', listStyleType: 'none' }} className='results'>
				{loading ? <li style={{ color: 'black' }}>Loading, please wait...</li> : null}
				{results.length
					? results.map((result, index) => (
							<li key={index}>
								<Link to={getID(result.url).url}>
									<span style={{ color: 'black' }}>Name:</span> <em>{result.name}</em>
									{'  '}
									<span style={{ color: 'black' }}>Category:</span> <em>{getID(result.url).category}</em>
								</Link>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
}
