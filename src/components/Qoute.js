import React, { useState } from "react";
import { createClient } from "pexels";

const Qoute = (props) => {
	const [qoute, setqoute] = useState({});
	const pexelsKey = "563492ad6f91700001000001f3b032d7eaa44292b736ef74871317ba";

	const generateQoute = () => {
		let index = Math.floor(Math.random() * 1600);
		let q = props.getQoutes[index];

		// Create a pexels client
		const client = createClient(pexelsKey);

		let getPhoto = async () => {
			const photos = await client.photos.random();
			console.log(photos.src.original);
			props.setImage(photos.src.original);
		};
		getPhoto();

		if (q.author === null) {
			q.author = "Anonymous";
		}
		setqoute(q);

		//console.log(qoute);
	};
	return (
		<div className="Qoute">
			<div>
				<button className="btn" onClick={generateQoute}>
					Get Random Qoute
				</button>
			</div>
			<div>
				<p id="qoute_text">
					<em>"{qoute.text}"</em>
				</p>
				<p id="qoute_author">{qoute.author}</p>
			</div>
		</div>
	);
};
export default Qoute;
