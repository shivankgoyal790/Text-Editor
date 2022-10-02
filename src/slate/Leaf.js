//When text-level formatting is rendered, the characters are grouped into "leaves" of text
//that each contain the same formatting applied to them.
// Used to perform Range Model operations

import React from "react";

const Leaf = ({ attributes, children, leaf }) => {
	if (leaf.bold) {
		children = <strong>{children}</strong>;
	}

	if (leaf.italic) {
		children = <em>{children}</em>;
	}

	if (leaf.underline) {
		children = <u>{children}</u>;
	}

	if (leaf.blockquote) {
		children = (
			<blockquote className=" text-secondary"> "{children}"</blockquote>
		);
	}

	if (leaf.bgColor) {
		children = (
			<span style={{ backgroundColor: leaf.bgColor }}>{children}</span>
		);
	}

	if (leaf.href) {
		children = (
			<a
				href={leaf.href}
				onClick={() => {
					window.location.href = `https://` + leaf.href;
				}}
			>
				{children}
			</a>
		);
	}

	return <span {...attributes}>{children}</span>;
};

export default Leaf;
