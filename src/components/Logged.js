import React from 'react';
import Customer from '../images/customer_circle.png';
import AddProduct from '../images/add_product.png';
import Logout from '../images/logout.png';
import UserIcon from '../images/user.png';
import PartnerIcon from '../images/partner_circle.png';
import {Dropdown} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import MyCart from './Cart'

function Logged() {
    const user = 'partner';
    return (
        <>
            {user === 'partner' ? <PartnerDropdownMenu /> : <CustomerDropdownMenu />}
        </>
    )
}

function CustomerDropdownMenu(){
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
            </Dropdown>
        </>
    ); 
}

function PartnerDropdownMenu(){
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
            </Dropdown>
        </>
    ); 
}

export default Logged
