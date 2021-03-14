import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Modal, Button, Form} from 'react-bootstrap';

import { UserContext } from '../contexts/userContext';

import { User } from './dummy';

function NotLogged() {

    const [state, dispatch] = useContext(UserContext);

    const [modalLogin, setModalLogin] = useState(false);

    const loginClose = () => {
        setModalLogin(false);
    };

    const [modalRegister, setModalRegister] = useState(false);

    const registerClose = () => {
        setModalRegister(false);
    };

    
    return(
        <>
            <button type="button" style={{ padding: "5px 15px", marginRight: 10 }} onClick={() => setModalLogin(true)} className="btn btn-dark">Login</button>
            <button type="button" style={{ padding: "5px 15px" }} onClick={() => setModalRegister(true)} className="btn btn-dark">Register</button>
            <ModalLogin />
            <ModalRegister />
        </>
    );

    function ModalLogin(){

        const changeToRegister = () => {
            loginClose();
            setModalRegister(true);
        }

        const history = useHistory();
        const [formValues, setFormValues] = useState({
            email: '',
            password: ''
        });
    
        const handleFormLoginChange = event => {
            const {name, value} = event.target;
            setFormValues({
                ...formValues,
                [name]: value
            });
        }
    
        const handleLoginSubmit = () => {
            const searchUser = User.find(search => search.email == formValues.email);
            if (searchUser !== undefined) {
                if (searchUser.email == formValues.email && searchUser.password == formValues.password) {
                    if (searchUser.role == "partner") {
                        dispatch({
                            type: "LOGIN",
                            payload: {
                                role: searchUser.role,
                            }
                        });
                        setModalLogin(false);
                        history.push('/partner');
                    } else if (searchUser.role == "customer"){
                        dispatch({
                            type: "LOGIN",
                            payload: {
                                role: searchUser.role,
                            }
                        });
                        setModalLogin(false);
                        history.push('/');
                    } else {
                        loginClose();
                    }   
                } else {
                    setModalLogin(false);
                }
            } else {
                loginClose();
            }
        }

        return (
            <Modal
                show={modalLogin}
                onHide={loginClose}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Title id="contained-modal-title-vcenter" className="mb-4" style={{ color: "#FFC700", fontFamily: "'Abhaya Libre'", fontWeight: "900", fontSize: 36, letterSpacing: 2 }}>
                        Login
                    </Modal.Title>
                    <Form>
                        <Form.Group controlId="emailLogin">
                            <Form.Control type="email" name="email" placeholder="Enter Your Email" value={formValues.email} onChange={handleFormLoginChange} />
                        </Form.Group>
                        <Form.Group controlId="passwordLogin">
                            <Form.Control type="password" name="password" placeholder="Enter Your Password" value={formValues.password} onChange={handleFormLoginChange} />
                        </Form.Group>
                        <Button variant="dark" onClick={() => handleLoginSubmit()} style={{width: "100%", marginTop: 20}}>Login</Button>
                    </Form>
                    <p style={{ color: "#B1B1B1", fontFamily: "'Nunito Sans'", textAlign: "center", marginTop: 10, marginBottom: 0 }}>Don't Have an Account ? Click <span style={{ fontWeight: "Bolder", cursor: "pointer" }} onClick={changeToRegister}>Here</span></p>
                </Modal.Body>
            </Modal>
        );
    }

    function ModalRegister(){

        const changeToLogin = () => {
            registerClose();
            setModalLogin(true);
        }

        return (
            <Modal
                show={modalRegister}
                onHide={registerClose}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Title id="contained-modal-title-vcenter" className="mb-4" style={{ color: "#FFC700", fontFamily: "'Abhaya Libre'", fontWeight: "900", fontSize: 36, letterSpacing: 2 }}>
                        Register
                    </Modal.Title>
                    <Form>
                        <Form.Group controlId="emailLogin">
                            <Form.Control type="email" name="email" placeholder="Email"  />
                        </Form.Group>
                        <Form.Group controlId="passwordLogin">
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="fullName">
                            <Form.Control type="text" name="fullName" placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group controlId="gender">
                            <Form.Control type="text" name="gender" placeholder="Gender" />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Control type="text" name="phone" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group controlId="userRole">
                            <Form.Control as="select" custom>
                                <option selected disabled>Choose your role</option>
                                <option value="customer">As Customer</option>
                                <option value="partner">As Restaurant Partner</option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Button variant="dark" onClick={registerClose} style={{width: "100%", marginTop: 20}}>Register</Button>
                    </Form>
                    <p style={{ color: "#B1B1B1", fontFamily: "'Nunito Sans'", textAlign: "center", marginTop: 10, marginBottom: 0 }}>Already Have an Account ? <span style={{ fontWeight: "Bolder", cursor: "pointer" }} onClick={changeToLogin}>Login</span></p>
                </Modal.Body>
            </Modal>
        );
    }
}

export default NotLogged;