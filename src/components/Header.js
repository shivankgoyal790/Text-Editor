// header of our application with logo

import React from "react";
import "../App.css";
import logo from "../images/logo-02 1.png";
const Header = () => {
	return (
		<div className="w-100 header d-flex">
			<div className="d-flex justify-content-center align-items-center px-3 myborder">
				<img src={logo} alt="logo"></img>
			</div>
			<div className="d-flex align-items-center px-2 fw-bolder">Data</div>
		</div>
	);
};

export default Header;
