import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	//this is just to show error boundry functions though this is dev version of react

	// if (true) {
	// 	throw new Error('NOOOO!');
	// }
	return (
		<div>
			{robots.map((user, i) => {
				return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
			})}
		</div>
	);
};

export default CardList;
