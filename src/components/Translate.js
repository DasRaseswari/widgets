import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
	{
		label: "Afrikaans",
		value: "af"
	},
	{
		label: "Arabic",
		value: "ar"
	},
	{
		label: "Bengali",
		value: "bn"
	},
	{
		label: "Chinese (Simplified)",
		value: "zh"
	},
	{
		label: "French",
		value: "fr"
	},
	{
		label: "Hindi",
		value: "hi"
	},
	{
		label: "Italian",
		value: "it"
	},
	{
		label: "Spanish",
		value: "es"
	}
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");

	return (
		<div className="ui raised padded container segment">
			{!window.location.href.includes("http://localhost") &&
				!window.location.href.includes("http://127.0.0.1") && (
					<h2 style={{ color: "red" }}>
						Note: Since Google Translate is a paid API, the translate widget will only work locally
					</h2>
				)}

			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>
			<Dropdown
				label="Select a language"
				selected={language}
				onSelectedChange={setLanguage}
				options={options}
			/>
			<hr />
			<h3 className="ui header">Output</h3>
			<Convert text={text} language={language} />
		</div>
	);
};

export default Translate;
