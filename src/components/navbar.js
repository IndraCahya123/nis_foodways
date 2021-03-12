import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Form, Nav} from 'react-bootstrap';
import brandLogo from '../images/fw_logo.png';
import NotLogged from './NotLogged';
import Logged from './Logged';

function MyNavbar(){
    const testLogin = false;
    return(
        <Navbar fixed="top">
            <Navbar.Brand as={Link} to="/" >
                WaysFood{' '}
                <img
                    src={brandLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="FoodWays logo"
                />
            </Navbar.Brand>
            
            <Nav className="mr-auto">
            </Nav>

            <Form inline>
                {testLogin ? <Logged /> : <NotLogged />}
            </Form>
        </Navbar>
    );
}

export default MyNavbar;