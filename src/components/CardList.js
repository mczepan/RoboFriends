import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('ERROR!');
	// }
	return (
		<div className="div-card-list">
			{robots.map((robot) => (
				<Card
					key={robot.id}
					id={robot.id}
					name={robot.name}
					username={robot.username}
					email={robot.email}
				/>
			))}
		</div>
	);
};

export default CardList;
