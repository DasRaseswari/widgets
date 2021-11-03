import React, { useState } from "react";

const items = [
	{
		title: "What is React?",
		content: "React is a front end javascript framework."
	},
	{
		title: "Why use React?",
		content: "React is a favorite JS library among engineers."
	},
	{
		title: "How do you use React?",
		content: "You use React by creating components."
	}
];

const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderedItems = items.map((item, index) => {
		const active = index === activeIndex ? "active" : "";
		return (
			<React.Fragment key={item.title}>
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});
	return (
		<div className="ui raised padded text container segment">
			<div className="ui styled accordion">{renderedItems}</div>
		</div>
	);
};

export default Accordion;
