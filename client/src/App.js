import React from 'react';
import './App.css';
// import axios from 'axios';
// import User from './user/user';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import Slider from './Slider';
import './slider.scss';
import { library } from '@fortawesome/fontawesome-svg-core';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<Slider />
			</header>
		</div>
	);
};

export default App;
