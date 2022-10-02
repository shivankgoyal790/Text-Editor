// map all the users available to create a div/block and render them

import React from "react";
import Users from "./Users";
import img1 from "../images/shivank1.jpg";

// users available
const Myusers = [
	{
		id: 1,
		name: "speaker1",
		time: "09:45",
		img: img1,
		comment:
			"There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa don't look even slightly believable. If you are going to use a passage.",
		colr: "danger",
	},
	{
		id: 2,
		name: "speaker2",
		time: "06:35",
		img: img1,
		comment:
			"There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa don't look even slightly believable. If you are going to use a passage.",
		colr: "primary",
	},
	{
		id: 3,
		name: "speaker3",
		time: "04:30",
		img: img1,
		comment:
			"There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa believable. If you are going to don’t look even slightly believable. If you are going to use a passage.",
		colr: "warning",
	},
];

const UserList = () => {
	return (
		<div className="w-100 row rounded-5">
			<div className="col-md-2 col-sm-1"></div>
			<div className=" d-flex justify-content-center flex-wrap mt-5 bg-light p-2 col-6 rounded-5 flex-column">
				<div className="container px-4">Box1</div>
				{Myusers.map((curr) => {
					return (
						<Users
							key={curr.id}
							id={curr.id}
							name={curr.name}
							time={curr.time}
							img={curr.img}
							comment={curr.comment}
							colr={curr.colr}
						/>
					);
				})}
			</div>
			<div className="col-md-4 col-0"></div>
		</div>
	);
};

export default UserList;
