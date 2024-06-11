function ArrayMap(){
    const fruits = ["apple", "banana", "mango", "pineapple"];
    const listItems = fruits.map(fruit => <li>{fruit}</li>);
    return (<ol>{listItems}</ol>);
}

export default ArrayMap;