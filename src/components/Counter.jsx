import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../actions";

function Counter() {
    const count = useSelector((state) => state.count);
    console.log("Count Value:", count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter;
