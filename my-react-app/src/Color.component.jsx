import { connect } from "react-redux";
import { changeColor, selectColor } from "./store/color.reducer";

function Color(props) {
	const { color, dispatch } = props;

	const changeColorHandler = (e) => {
		dispatch(changeColor(e.target.value));
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 10,
				fontSize: 24,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<h1>Color</h1>
			<input type="color" value={color} onChange={changeColorHandler} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		color: selectColor(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Color);
