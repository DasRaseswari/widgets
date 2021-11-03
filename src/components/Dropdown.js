import React, { useState, useEffect, useRef } from "react";

export const options = [
	{
		label: "The Color Red",
		value: "#F58873"
	},
	{
		label: "The Color Green",
		value: "#C7f573"
	},
	{
		label: "The Color Blue",
		value: "#008fff"
	}
];

const Dropdown = ({ label, selected, options, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};

		document.body.addEventListener("click", onBodyClick, {
			capture: true
		});

		return () => {
			document.body.removeEventListener("click", onBodyClick, {
				capture: true
			});
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className="item"
				onClick={() => {
					onSelectedChange(option);
				}}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => {
						setOpen(!open);
					}}
					className={`ui selection dropdown ${open ? "visible active" : ""}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? "visible transition" : ""}`}>{renderedOptions}</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
