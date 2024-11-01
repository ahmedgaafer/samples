import { createSlice, current } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;
