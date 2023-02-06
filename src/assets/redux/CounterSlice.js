import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: "Home",
    value2: {}
}

export const CounterSlice = createSlice ({
    name: "Page",
    initialState,
    reducers: {
        goToIndex: (state) => {
            state.value = "Home"
        },
        goToDetails: (state) => {
            state.value = "Details"
        },
        getMovieDetails: (state, action) => {
            state.value2 = action.payload
        }
    }
})

export const { goToIndex, goToDetails, getMovieDetails } = CounterSlice.actions;

export default CounterSlice.reducer;