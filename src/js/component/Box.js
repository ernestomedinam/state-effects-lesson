import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Box = ({ newWidth, ...props }) => {
	const [width, setWidth] = useState("20rem");
	useEffect(() => {
		console.log("cambiando de ", width, " a ", newWidth);
		setWidth(newWidth); // setWidth("50px")
		console.log("cambiando de ", width, " a ", newWidth);
	}, [newWidth, width]);
	return (
		<div
			className="d-flex"
			style={{
				width: width,
				height: "20rem",
				border: "5px solid yellowgreen",
			}}
		/>
	);
};

Box.propTypes = {
	newWidth: PropTypes.string,
};
