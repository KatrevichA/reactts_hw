import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment, incrementByAmount, nullification} from "./slices/slice1";


const App = () => {

    const {xxx} = useAppSelector((state) => state.slice1);

    const dispatch  = useAppDispatch();

    return (
        <div>

            <h2>{xxx}</h2>
            <button onClick={()=>{
                dispatch(increment(1));
            }}>increment</button>
            <button onClick={()=> {
                dispatch(decrement(1));
            }}>decrement</button>
            <button onClick={()=> {
                dispatch(incrementByAmount(10));
            }}>increment By Amount 10</button>
            <button onClick={()=> {
                dispatch(nullification(0));
            }}>nullification</button>

        </div>
    );
};

export default App;