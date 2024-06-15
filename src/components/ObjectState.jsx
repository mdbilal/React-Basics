import { useState } from "react";

function ObjectState(){
    const [obj, setObj] = useState({make: "honda", model: 2024, variant: "civic"});
    const handleMake = (event) => {
        setObj({...obj, make: event.target.value})
    }
    const handleModel = (event) => {
        setObj({...obj, model: event.target.value})
    }
    const handleVariant = (event) => {
        setObj({...obj, variant: event.target.value})
    }
    return (
        <>
            <p>My Favourite Car {obj.make} {obj.model} {obj.variant}</p>
            <input type="text" onChange={handleMake}/>
            <input type="number" onChange={handleModel}/>
            <input type="text" onChange={handleVariant}/>
        </>
    );
}

export default ObjectState;