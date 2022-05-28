import React, { useState, useEffect } from "react";

export const Counter = (props) => {
	const [seconds, setSeconds] = useState(0);
	const [on, setOn] = useState(true);
	useEffect(() => {
		if (!on) return;
		setTimeout(() => {
			setSeconds(seconds + 1);
		}, 1000);
	}, [on, seconds]);
	return (
		<>
			<p>{seconds}</p>;
			<button onClick={(e) => setOn((prev) => !prev)}>
				{"pause/play"}
			</button>
		</>
	);
};
