import React from 'react';
import Card from 'react-bootstrap/Card';
import './User.css';

const User = (props) => {
	return (
		<div key={props.key} className="User">
			<img src={props.link} />
		</div>
	);
};
export default User;
