import { useState } from "react";

function ObjectState(){
    const [obj, setObj] = useState({make: "honda", model: 2024, variant: "civic"});
    const handleMake = (event) => {
        setObj( preObj => ({...preObj, make: event.target.value}))
    }
    const handleModel = (event) => {
        setObj(preObj => ({...preObj, model: event.target.value}))
    }
    const handleVariant = (event) => {
        setObj(preObj => ({...preObj, variant: event.target.value}))
    }
    return (
        <>
            <p>My Favourite Car's Make: {obj.make}, Model: {obj.model}, Variant: {obj.variant}</p>
            <input type="text" onChange={handleMake}/>
            <input type="number" onChange={handleModel}/>
            <input type="text" onChange={handleVariant}/>
        </>
    );
}

export default ObjectState;