import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

function Slider() {
	const [ pictures, updatePictures ] = useState([]);
	const right = <FontAwesomeIcon icon={faArrowCircleRight} />;
	const left = <FontAwesomeIcon icon={faArrowCircleLeft} />;

	// Make a request for a user with a given ID
	useEffect(() => {
		axios
			.get('https://picsum.photos/v2/list')
			.then((response) => {
				// handle success
				console.log(response.data);

				const data = response.data;
				updatePictures(data);
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
	}, []);
	let picArray = [ ...pictures ];
	const [ x, setX ] = useState(0);
	const goLeft = () => {
		x === 0 ? setX(-100 * (picArray.length - 1)) : setX(x + 100);
	};
	const goRight = () => {
		x === -100 * (picArray.length - 1) ? setX(0) : setX(x - 100);
	};
	return (
		<div className="slider">
			{picArray.map((item, index) => {
				console.log(item);
				return (
					<div key={item.id} className="slide" style={{ transform: `translateX(${x}%)` }}>
						<img className="pic" src={item.download_url} />
					</div>
				);
			})}
			<button className="goLeft" onClick={goLeft}>
				{left}
			</button>
			<button className="goRight" onClick={goRight}>
				{right}
			</button>
		</div>
	);
}
export default Slider;
