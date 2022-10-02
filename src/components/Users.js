// single user component for the speaker inside the box

import React, { useState } from "react";
import "../App.css";
import Textedit from "../Textedit";

const Users = (props) => {
	// state to manage the highlighted value in tags
	const [highlightedvalue, sethighlightedvalue] = useState(
		"Select Text To Highlight"
	);

	// state to check if the text is seleted
	const [isselected, setisselected] = useState(false);

	// function to highlight the selected text
	const highlight = (id) => {
		var inputText = document.getElementById(id);
		var innerHTML = inputText.innerHTML;
		var index = innerHTML.indexOf(highlightedvalue);

		setisselected(false);

		if (index >= 0) {
			innerHTML =
				innerHTML.substring(0, index) +
				`<span style="opacity : 1" class="bg-${props.colr} text-white">` +
				innerHTML.substring(index, index + highlightedvalue.length) +
				"</span>" +
				innerHTML.substring(index + highlightedvalue.length);
			inputText.innerHTML = innerHTML;
		}
	};

	return (
		<div className="p-4 row position-relative">
			<div className="w-100 d-flex">
				<div>
					<img
						className="rounded-circle"
						src={props.img}
						alt="user"
						width="40px"
					></img>
				</div>
				<div className="px-3">
					<div className="d-flex gap-1">
						<div className=" fw-bolder">{props.name}</div>
						<div className="text-secondary">{props.time}</div>
					</div>
					<div
						id={props.id}
						className=" fw-normal comment"
						// event on mouseup to highlight selected text
						onMouseUp={() => {
							var text = window.getSelection().toString();
							if (text.length > 0) {
								sethighlightedvalue(text);
								setisselected(true);
							} else {
								sethighlightedvalue("Select Text To Highlight");
							}
						}}
					>
						<Textedit alt={props.comment} />
					</div>
					{isselected && (
						<button
							className="btn btn-primary position-absolute top-75 bg-danger"
							style={{ left: "50%" }}
							onClick={highlight(props.id)}
						></button>
					)}
				</div>
			</div>

			<div
				className={`position-absolute top-50 highlight-text btn btn-${props.colr} text-truncate`}
				style={{ width: 206, fontSize: 13 }}
			>
				{highlightedvalue}
			</div>
		</div>
	);
};

export default Users;
