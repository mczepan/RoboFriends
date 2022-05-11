import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots?.filter((r) =>
			r.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
		);
		return robots?.length ? (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox
					searchfield={searchfield}
					searchChange={this.onSearchChange}
				/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		) : (
			<h1>Loading</h1>
		);
	}
}

export default App;
