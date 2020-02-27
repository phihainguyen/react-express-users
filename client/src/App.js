import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import User from './user/user';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const App = () => {
	const [ users, updateUser ] = useState([]);
	// Make a request for a user with a given ID
	const getUserHandler = () => {
		axios
			.get('https://reqres.in/api/users?page=2')
			.then((response) => {
				// handle success
				console.log(response.data.data);

				const data = response.data.data;
				updateUser(data);
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
	};

	const person = users.map((user) => {
		return (
			<User key={user.id} link={user.avatar} first={user.first_name} last={user.last_name} email={user.email} />
		);
	});
	return (
		<div className="App">
			<header className="App-header">
				<Button variant="secondary" size="lg" onClick={getUserHandler}>
					Get Users
				</Button>
				{person}
			</header>
		</div>
	);
};

export default App;
