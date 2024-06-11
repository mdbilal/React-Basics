import propTypes from 'prop-types';

function Greeting(props){
    const success = <h1>welcome {props.userName}</h1>
    const error = <h1>please login to continue</h1>
    return (props.isLoggedIn ? success : error);
}

export default Greeting;

Greeting.propTypes = {
    isLoggedIn: propTypes.bool,
    userName: propTypes.string,
}

Greeting.defaultProps = {
    userName: 'MD Bilal',
}