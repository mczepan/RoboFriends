import React from 'react';
import './Card.css';

const Card = ({ name, username, email, id }) => {
	return (
		// <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
		<div className="div-card">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
