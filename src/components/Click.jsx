function Click(){

    let count = 0;
    const handleClick = (e) => e.target.style.display = 'none';
    return (
        <button onClick={(e) => handleClick(e)}>click me</button>
    )
}

export default Click;