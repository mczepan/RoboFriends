import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { connect } from 'react-redux';
import { fetchRobots, setSearchfield } from '../actions';

const App = ({
	searchField,
	onSearchFieldChange,
	isFetching,
	fetched,
	robots,
	onFetchRobots,
	error,
}) => {
	useEffect(() => {
		onFetchRobots();
	}, []);

	const filteredRobots = robots?.filter((r) =>
		r.name.toLocaleLowerCase().includes(searchField?.toLocaleLowerCase())
	);

	return !isFetching ? (
		<div>
			<h1>RoboFriends</h1>
			<SearchBox searchfield={searchField} searchChange={onSearchFieldChange} />
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

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		isFetching: state.fetchRobots.isFetching,
		fetched: state.fetchRobots.fetched,
		robots: state.fetchRobots.robots,
		error: state.fetchRobots.error,
	};
};

const mapDispatchToProps = (dispatch) => ({
	onSearchFieldChange: (e) => dispatch(setSearchfield(e.target.value)),
	onFetchRobots: () => dispatch(fetchRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
