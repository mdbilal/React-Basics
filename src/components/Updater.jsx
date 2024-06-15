import React, {useState} from "react";

function Updater() {
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        setCount(prevCount => prevCount-1);
        setCount(prevCount => prevCount-1);
        setCount(prevCount => prevCount-1);
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleIncrement = () => {
        setCount(prevCount => prevCount+1)
        setCount(prevCount => prevCount+1);
        setCount(prevCount => prevCount+1);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>Increment</button>
        </>
    );
}

export default Updater;