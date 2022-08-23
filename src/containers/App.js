import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setRobots(users));
	}, []);

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	};

	const filteredRobots = robots?.filter((r) =>
		r.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
	);

	return robots?.length ? (
		<div>
			<h1>RoboFriends</h1>
			<SearchBox searchfield={searchfield} searchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots} />
				</ErrorBoundry>
			</Scroll>
		</div>
	) : (
		<h1>Loading</h1>
	);
};

export default App;
