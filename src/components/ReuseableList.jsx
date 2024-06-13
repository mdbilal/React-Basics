import propTypes from 'prop-types';

function ReusableList(props){
    const category = props.category;
    const items = props.items;
    const fruits = items.map(fruit => <li key={fruit.id}>{fruit.name} <b>{fruit.calories}</b></li>);
    return (
        <>
            <h2>{category}</h2>
            <ul>{fruits}</ul>
        </>
    );
}

ReusableList.propTypes = {
    category: propTypes.category,
    items: propTypes.arrayOf(
            propTypes.shape(
                {id: propTypes.number}, 
                {name: propTypes.string}, 
                {calories: propTypes.number}
            )
        )
}

ReusableList.defaultProps = {
    category: 'category',
    items: [],
}

export default ReusableList;