import React from 'react';
import Card from 'react-bootstrap/Card';
import './User.css';

const User = (props) => {
	return (
		<div key={props.key} className="User">
			<h1>
				{props.first} {props.last}
			</h1>
			<img src={props.link} />
			<p>Email: {props.email}</p>
		</div>
	);
};
export default User;
