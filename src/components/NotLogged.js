import {Link} from 'react-router-dom';

function NotLogged() {
    return(
        <>
            <button style={{ padding: "5px 15px", marginRight: 10 }} className="btn btn-dark" as={Link} to="/login" >Login</button>
            <button style={{ padding: "5px 15px" }} className="btn btn-dark">Register</button>
        </>
    );
}

export default NotLogged;