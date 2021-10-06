import React, { useState, useEffect } from "react";
import "./App.css";
import Qoute from "./components/Qoute";

const App = () => {
	// lets declare a state variable
	const [qoutes, setQoutes] = useState(null);
	const api = "https://type.fit/api/quotes";

	useEffect(() => {
		getQuoutes();
	}, []);

	const getQuoutes = async () => {
		const response = await fetch(api);
		const data = await response.json();
		setQoutes(data);
	};

	return (
		<div>
			<Qoute getQoutes={qoutes} />
		</div>
	);
};

export default App;
