import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
	return (
		<div className="padding">
			<input
				className="input-padding"
				type="search"
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
