import React, { useState } from "react";

const Qoute = (props) => {
	const [qoute, setqoute] = useState({});

	const generateQoute = () => {
		let index = Math.floor(Math.random() * 1600);
		let q = props.getQoutes[index];

		if (q.author === null) {
			q.author = "Anonymous";
		}
		setqoute(q);

		console.log(qoute);
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
