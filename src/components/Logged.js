import React from 'react';
import Cart from '../images/cart.png';
import Customer from '../images/customer_circle.png';
import {Dropdown} from 'react-bootstrap';

function Logged() {
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

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default Logged
