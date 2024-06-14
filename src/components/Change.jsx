import React, {useState} from 'react';

//text, number, textarea, select, radio

function Change(){
    const [text, setText] = useState('');
    const [number, setNumber] = useState(0);
    const [textArea, setTextArea] = useState('');
    const [select, setSelect] = useState('');
    const [radio, setRadio] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    }

    const handleTextAreaChange = (event) => {
        setTextArea(event.target.value);
    }

    const handleSelectChange = (event) => {
        setSelect(event.target.value);
    }

    const handleRadioChange = (event) => {
        setRadio(event.target.value);
    }

    return (
        <>
            <br />
            <label htmlFor="text">Text: {text}</label><br />
            <input type="text" name="text" id="text" onChange={handleTextChange}/><br />

            <label htmlFor="number">Number: {number}</label><br />
            <input type="number" name="number" id="number" onChange={handleNumberChange} /><br />

            <label htmlFor="textArea">Text Area: {textArea}</label><br />
            <textarea name="textArea" id="textArea" onChange={handleTextAreaChange}></textarea><br />

            <label htmlFor="select">Select: {select}</label><br />
            <select name="select" id="select" onChange={handleSelectChange}>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
            </select><br />
            
            <label>Radio: {radio}</label><br />
            <input type="radio" name="radio" value="male" onChange={handleRadioChange}/>male <br />
            <input type="radio" name="radio" value="female" onChange={handleRadioChange}/>female <br />
        </>
    );
}

export default Change;