import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.slice";
import colorReducer from "./color.reducer";

export default configureStore({
	reducer: {
		counter: counterReducer,
		colorReducer: colorReducer,
	},
});
