import React from "react";
import Header from "./components/Header";
import SearchMovies from "./SearchMovies";
import "./App.css";

const App = () => {
	return (
		<div className='App'>
			<Header />
			<SearchMovies />
		</div>
	);
};

export default App;
