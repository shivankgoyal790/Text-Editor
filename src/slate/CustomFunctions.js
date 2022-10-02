// Custom functions for changing the formattings of whole text eg. center aligning the whole text
import { useContext } from "react";
import { FontContext } from "../components/FontContext";

const AlignCenter = (props) => {
	return <div className="d-flex justify-content-center">{props.children}</div>;
};

// for left aligning the text of the editor
const AlignLeft = (props) => {
	return (
		<div className="d-flex justify-content-start py-2">{props.children}</div>
	);
};

// For Creating an ordered List
const Orderme = (props) => {
	return (
		<ul {...props.attributes}>
			<li>{props.children}</li>
		</ul>
	);
};

// for Adding an image
const Addimage = (props) => {
	console.log("hi");
	let url = prompt("enter url");
	return (
		<p {...props.attributes}>
			{props.children}
			<br></br>
			<img width="500px" src={url} alt="img1"></img>
		</p>
	);
};

// for adding an emoji
const AddEmoji = (props) => {
	return <p {...props.attributes}>{props.children}</p>;
};

//for chaing the font size

const ChangeFont = (props) => {
	const mycontext = useContext(FontContext);
	return (
		<p {...props.attributes} style={{ fontSize: mycontext.fontsize }}>
			{props.children}
		</p>
	);
};

// default case
const DefaultElement = (props) => {
	return <p {...props.attributes}>{props.children}</p>;
};

export {
	DefaultElement,
	Addimage,
	Orderme,
	AlignCenter,
	AlignLeft,
	AddEmoji,
	ChangeFont,
};
