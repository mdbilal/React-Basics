import propTypes from 'prop-types';

function Items(props){
    return(
        <div className="card">
            <h1 className="card-title">{props.quantity}{props.name}</h1>
            <p className="card-body">{props.body}</p>
            <img src={props.image} alt="item-image" />
        </div>
    );
}

Items.propTypes = {
    quantity: propTypes.number,
    name: propTypes.string,
    body: propTypes.string,
    image: propTypes.string, 
}

Items.defaultProps = {
    quantity: 1,
    name: 'Fruit',
    body: 'Fruits are good for health',
    image: 'https://picsum.photos/200/200',
}

export default Items;