import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count+1);
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleDecrement = () => {
        setCount(count-1);
    }
    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>Increment</button>
        </>
    );
}

export default Counter;