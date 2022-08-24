import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS } from './constants';

const initialStateSearch = {
	searchField: '',
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return { ...initialStateSearch, searchField: action.payload };
		default:
			return state;
	}
};
const initialStateRobots = {
	isFetching: false,
	fetched: false,
	robots: [],
};

export const fetchRobots = (state = initialStateRobots, action = {}) => {
	switch (action.type) {
		case FETCH_ROBOTS + 'START':
			return { ...initialStateRobots, isFetching: true, fetched: false };
		case FETCH_ROBOTS + 'DONE':
			return {
				...initialStateRobots,
				isFetching: false,
				fetched: true,
				robots: action.payload,
			};
		case FETCH_ROBOTS + 'FAILED':
			return {
				...initialStateRobots,
				isFetching: false,
				fetched: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
