import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType ={
    xxx: number
}

const initialState:CounterStateType = {
    xxx:0
};

export const counter1Slice = createSlice({
    name: "counter1",
    initialState: initialState,
    reducers:{
        increment: (state, action:PayloadAction<number>) => {
            state.xxx = state.xxx + action.payload;
        },
        decrement: (state, action:PayloadAction<number>) => {
            state.xxx = state.xxx - action.payload;
        },
        incrementByAmount: (state, action:PayloadAction<number>) => {
            state.xxx = state.xxx + action.payload;
        },
        nullification: (state,action:PayloadAction<number>) => {
            state.xxx = state.xxx = action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    incrementByAmount,
    nullification
} = counter1Slice.actions
