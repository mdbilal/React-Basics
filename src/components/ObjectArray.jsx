import React, {useState} from "react";

function ObjectArray(){
    const [cars, setCars] = useState([]);
    const [make, setMake] = useState('');
    const [model, setModel] = useState(new Date().getFullYear());
    const [variant, setVariant] = useState('');

    const handleAddCar = () => {
        const newCar = {make: make, model: model, variant: variant};
        setCars(prevCars => [...prevCars, newCar]);
        
        setMake('');
        setModel(new Date().getFullYear());
        setVariant('');
    }

    const handleRemoveCar = (index) => {
        setCars(prevCars => prevCars.filter((_, i) => index!=i));
    }

    const handleMakeChange = (event) => {
        setMake(event.target.value)
    }

    const handleModelChange = (event) => {
        setModel(event.target.value)
    }

    const handleVariantChange = (event) => {
        setVariant(event.target.value)
    }

    return (
        <>
            <h2>List Car Objects</h2>
            <ul>
                {cars && cars.map((car, index) => <li onClick={() => handleRemoveCar(index)} key={index}>{car.make} {car.model} {car.variant}</li>)}
            </ul>
            <input type="text" placeholder="enter car make" value={make} onChange={handleMakeChange}/>
            <input type="number" placeholder="enter car model" value={model} onChange={handleModelChange}/>
            <input type="text" placeholder="enter car variant" value={variant} onChange={handleVariantChange}/>
            <button onClick={handleAddCar}>Add</button>
        </>
    );
}

export default ObjectArray;