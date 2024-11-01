import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./store/counter.slice";

export default function Counter() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();

	const add = () => {
		dispatch(increment());
	};

	const sub = () => {
		dispatch(decrement());
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 10,
				fontSize: 24,
			}}
		>
			<h1>Counter</h1>
			<button onClick={add}>+</button>
			<span>{count}</span>
			<button onClick={sub}>-</button>
		</div>
	);
}
