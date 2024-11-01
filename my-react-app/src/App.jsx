import { useState } from "react";
import Counter from "./Counter.component";
import ColorComponent from "./Color.component";
import { useSelector } from "react-redux";
import { selectColor } from "./store/color.reducer";

function App() {
	const [count, setCount] = useState(0);
	const color = useSelector(selectColor);

	return (
		<>
			<h1>Hello</h1>

			<Counter />

			<ColorComponent />

			<div
				style={{
					width: 100,
					height: 100,
					backgroundColor: color,
				}}
			></div>
		</>
	);
}

export default App;
