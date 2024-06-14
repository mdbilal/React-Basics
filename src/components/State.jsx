import React, {useState} from 'react';

function State(){
    const [name, setName] = useState('guest');
    const [age, setAge] = useState(0);
    const [status, setStatus] = useState(false);
    const handleClick = () => {
        setName('Bilal');
    }
    const incrementAge = () => {
        setAge(age+1);
    }
    const toggleStatus = () => {
        setStatus(!status);
    }
    return (
        <>
            <p>Name: {name}</p>
            <button onClick={handleClick}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Status: {status ? "Yes" : "No"}</p>
            <button onClick={toggleStatus}>Toggle Status</button>
        </>
    );
}

export default State