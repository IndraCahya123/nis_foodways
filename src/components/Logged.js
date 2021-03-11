import React from 'react';
import Cart from '../images/cart.png';
import Customer from '../images/customer_circle.png';
import AddProduct from '../images/add_product.png';
import Logout from '../images/logout.png';
import UserIcon from '../images/user.png';
import {Dropdown} from 'react-bootstrap';

function Logged() {
    const user = 'partner';
    return (
        <>
            <button style={{ background: "none", border: "none" }}>
                <img
                    src={Cart}
                    alt="Cart"
                    width="35px"
                    height="32px"
                />
            </button>
            <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                    <img 
                        src={Customer}
                        alt="Customer Rounded Image"
                        width="40px"
                        height="40px"
                    />
                </Dropdown.Toggle>

                {user === 'partner' ? <PartnerDropdownMenu /> : <CustomerDropdownMenu />}
            </Dropdown>
        </>
    )
}

function CustomerDropdownMenu(){
    return(
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className="d-flex align-items-center">
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
            <Dropdown.Item href="#/action-2" className="d-flex align-items-center">
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
    ); 
}

function PartnerDropdownMenu(){
    return(
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className="d-flex align-items-center">
                <img 
                    src={UserIcon}
                    alt="User Icon"
                    width="25px"
                    height="25px"
                    className="mr-2"
                />
                <span style={{ fontFamily: "'Nunito Sans'", fontWeight: "800" }}>Profile Partner</span>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1" className="d-flex align-items-center">
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
            <Dropdown.Item href="#/action-2" className="d-flex align-items-center">
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
    ); 
}

export default Logged
