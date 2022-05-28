import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Box } from "./Box";
import { Counter } from "./Counter";
import { WidthChanger } from "./WidthChanger";

//create your first component
const Home = () => {
	const [newWidth, setNewWidth] = useState("20rem");
	return (
		<div className="container">
			<div className="d-flex justify-content-center mt-5">
				<Box newWidth={newWidth} />
			</div>
			<WidthChanger setNewWidth={setNewWidth} />
			{/* <Counter /> */}
		</div>
	);
};

export default Home;
