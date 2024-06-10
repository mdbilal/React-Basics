function Items(props){
    return(
        <div className="card">
            <h1 className="card-title">{props.quantity}{props.name}</h1>
            <p className="card-body">{props.body}</p>
            <img src={props.image} alt="item-image" />
        </div>
    );
}

export default Items;