import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ color, setColor] = useState("red")
	const [ light, setLight] = useState(["red", "yellow", "green"])
	return (
		<div className="traffic-light-container-first">
			<div className="traffic-light-container-rectangle"></div>
			<div className="traffic-light-container-second">
				{light.map((colorLight,index) => <button
					key={index}
					onClick={() => setColor(colorLight)}
					className={`lights btn ${colorLight == color ? "active":"none"}`} 
					style={{backgroundColor: colorLight}}
					>
				</button>)}
			</div>
			<button
				onClick={() => setLight([...light, "purple"])}
				className="new-color-button">
			Add color purple
			</button>
		</div>

	);
};

export default Home;
