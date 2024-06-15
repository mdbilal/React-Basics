import React, {useState} from "react";

function ArrayState(){

    const [array, setArray] = useState(['apple', 'banana', 'mango', 'grapes']);

    const addItem = () => {
        const item = document.getElementById('fruits').value;
        document.getElementById('fruits').value = '';
        setArray( prevArray => [...prevArray , item]);
    }

    const deleteItem = (index) => {
        setArray(array.filter((_, i) => index != i))
    }

    return (
        <>
            <h2>List of fruits</h2>
            <ul>
                {array.map((fruit, index) => <li onClick={() => deleteItem(index)} key={index}>{fruit}</li>)}
            </ul>
            <input type="text" id="fruits" placeholder="add fruit"/>
            <button onClick={addItem}>Add</button>
        </>
    );
}

export default ArrayState;