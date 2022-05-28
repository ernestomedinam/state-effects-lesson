import React, { useState } from "react";
import PropTypes from "prop-types";

export const WidthChanger = ({ setNewWidth, ...props }) => {
	const [userWidth, setUserWidth] = useState("");
	const [userUnits, setUserUnits] = useState("");
	return (
		<div className="d-flex justify-content-center my-3">
			<input
				className="form-control w-50"
				type="text"
				value={userWidth}
				onChange={(event) => {
					setUserWidth(event.target.value);
				}}
			/>
			<select
				placeholder="escoja una opción"
				className="form-select"
				style={{ width: "8rem" }}
				value={userUnits}
				onChange={(event) => {
					// NO SE DEBE HACER
					// userUnits = event.target.value // ESTO ES ERROR: userUnits es read-only
					// ESTA ES LA FORMA
					setUserUnits(event.target.value);
				}}>
				<option disabled hidden>
					{""}
				</option>
				<option value={"px"}>{"pixels"}</option>
				<option value={"rem"}>{"rems"}</option>
				<option value={"pt"}>{"points"}</option>
			</select>
			<button
				className="btn btn-primary"
				onClick={(event) => {
					let newWidth = `${userWidth}${userUnits}`;
					setNewWidth(newWidth);
					setUserUnits("");
					setUserWidth("");
				}}>
				{"change width"}
			</button>
		</div>
	);
};

WidthChanger.propTypes = {
	setNewWidth: PropTypes.func,
};
