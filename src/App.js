import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown, { options } from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const App = () => {
	const [selected, setSelected] = useState({});

	return (
		<div>
			<Header color={selected.value} />
			<Route path="/">
				<Accordion />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<div className="ui raised padded text container segment">
					<Dropdown
						label="Select a color"
						selected={selected}
						onSelectedChange={setSelected}
						options={options}
					/>
				</div>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};

export default App;
