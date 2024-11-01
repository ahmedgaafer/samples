const initialState = {
	color: "#ff0000",
};

export default function colorReducer(state = initialState, action) {
	switch (action.type) {
		case "CHANGE_COLOR":
			return {
				...state,
				color: action.payload,
			};
		default:
			return state;
	}
}

export const changeColor = (color) => ({
	type: "CHANGE_COLOR",
	payload: color,
});

export const selectColor = (state) => state.colorReducer.color;
