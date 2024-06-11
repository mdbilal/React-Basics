function ObjectMap(){
    const fruits = [
        {id: 1, name:"Apple", calories:40},
        {id: 2, name:"Mango", calories:67},
        {id: 3, name:"Banana", calories:94},
        {id: 4, name:"Pineapple", calories:134},
        {id: 5, name:"Peach", calories:152},
    ];

    const filterList = fruits.filter(fruit => fruit.calories < 100);
    const list = filterList.map(fruit => <li key={fruit.id}>{fruit.name} : <b>{fruit.calories}</b></li>)
    return (<ol>{list}</ol>);
}

export default ObjectMap;