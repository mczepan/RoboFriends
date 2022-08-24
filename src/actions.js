import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS } from './constants';

export const setSearchfield = (text) => {
	return { type: CHANGE_SEARCH_FIELD, payload: text };
};

export const fetchRobots = () => (dispatch) => {
	dispatch({ type: FETCH_ROBOTS + 'START' });

	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((data) => dispatch({ type: FETCH_ROBOTS + 'DONE', payload: data }))
		.catch((err) => dispatch({ type: FETCH_ROBOTS + 'FAILED', payload: err }));
};
