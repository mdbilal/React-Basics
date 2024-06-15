import React, {useState} from "react";

function ColorPicker (){
    const [color, setColor] = useState("#123456");
    const handleChange = (event) => {
        setColor(event.target.value);
    }
    return (
        <>
            <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="selected-color" style={{background: color}}>
                    <p>{color}</p>
                </div>
                <label htmlFor="color">select a color: </label>
                <input type="color" name="color" id="color" onChange={handleChange} />
            </div>
        </>
    );
}

export default ColorPicker;