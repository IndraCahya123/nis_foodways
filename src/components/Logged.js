import {useContext} from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';

import { UserContext } from '../contexts/userContext';

import MyCart from './Cart';

import Customer from '../images/customer_circle.png';
import AddProduct from '../images/add_product.png';
import Logout from '../images/logout.png';
import UserIcon from '../images/user.png';
import PartnerIcon from '../images/partner_circle.png';



function Logged() {
    const [state, dispatch] = useContext(UserContext);

    switch (state.role) {
        case "partner":
            return (
                <PartnerDropdownMenu dispatch={dispatch} />
            );
        case "customer":
            return (
                <CustomerDropdownMenu dispatch={dispatch} />
            );
            
        default:
            break;
    }
}

function CustomerDropdownMenu(props) {
    const history = useHistory()

    return(
        <>
            <MyCart />
            <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                            <img 
                                src={Customer}
                                alt="Customer Rounded Image"
                                width="40px"
                                height="40px"
                            />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => history.push(`/profile/customer`)} className="d-flex align-items-center">
                        <img 
                            src={UserIcon}
                            alt="User Icon"
                            width="25px"
                            height="25px"
                            className="mr-2"
                        />
                        <span style={{ fontFamily: "'Nunito Sans'", fontWeight: "800" }}>Profile</span>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => {
                        props.dispatch({ type: "LOGOUT" });
                        history.push('/');
                    }} className="d-flex align-items-center">
                        <img 
                            src={Logout}
                            alt="Logout Icon"
                            width="25px"
                            height="25px"
                            className="mr-2"
                        />
                        <span style={{ fontFamily: "'Nunito Sans'", fontWeight: "800" }}>Logout</span>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    ); 
}

function PartnerDropdownMenu(props){
    const history = useHistory();
    return(
        <>
            <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                        <img 
                            src={PartnerIcon}
                            alt="Customer Rounded Image"
                            width="40px"
                            height="40px"
                            />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => history.push('/profile/partner')} className="d-flex align-items-center">
                        <img 
                            src={UserIcon}
                            alt="User Icon"
                            width="25px"
                            height="25px"
                            className="mr-2"
                        />
                        <span style={{ fontFamily: "'Nunito Sans'", fontWeight: "800" }}>Profile Partner</span>
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/add-product" className="d-flex align-items-center">
                        <img 
                            src={AddProduct}
                            alt="User Icon"
                            width="25px"
                            height="25px"
                            className="mr-2"
                            />
                        <span style={{ fontFamily: "'Nunito Sans'", fontWeight: "800" }}>Add Product</span>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => {
                        props.dispatch({ type: "LOGOUT" });
                        history.push('/');
                    }} className="d-flex align-items-center">
                    <img 
                        src={Logout}
                        alt="Logout Icon"
                        width="25px"
                        height="25px"
                        className="mr-2"
                        />
                    <span style={{ fontFamily: "'Nunito Sans'", fontWeight: "800" }}>Logout</span>
                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    ); 
}

export default Logged
