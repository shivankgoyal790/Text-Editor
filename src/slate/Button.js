// Creating a Button component for the toolbar

import React from "react";

const Button = (props) => {
	return (
		<button className="btn" onMouseDown={props.onMouseDown}>
			<img src={props.imgsrc} alt="toolbtn" />
		</button>
	);
};

export default Button;
