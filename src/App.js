import React, { useState, useEffect } from "react";
import "./App.css";
import Qoute from "./components/Qoute";

const App = () => {
	// lets declare a state variable
	const [qoutes, setQoutes] = useState(null);
	const [image, setImage] = useState("");

	const api = "https://type.fit/api/quotes";

	useEffect(() => {
		getQuoutes();
	}, []);

	const getQuoutes = async () => {
		const response = await fetch(api);
		const data = await response.json();
		setQoutes(data);
	};

	document.body.style = `background-image: url(${image})`;

	return (
		<div className="Qoute-Container">
			<Qoute getQoutes={qoutes} setImage={setImage} />
		</div>
	);
};

export default App;
