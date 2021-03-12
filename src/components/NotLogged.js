import {Link} from 'react-router-dom';

function NotLogged() {
    return(
        <>
            <Link type="button" style={{ padding: "5px 15px", marginRight: 10 }} to='/login' className="btn btn-dark">Login</Link>
            <button style={{ padding: "5px 15px" }} className="btn btn-dark">Register</button>
        </>
    );
}

export default NotLogged;