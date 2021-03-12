import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function LoginModal(){
    let history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [showed, setShowed] = useState(true);

    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        if (values.email == "indracahya51@gmail.com" && values.password == "123") {
            setShowed(false);
            history.push('/partner');
        } else {
            history.goBack();
        }
    }
    
    return (
        <Modal
            show={showed}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Login
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="emailLogin">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Your Email" value={values.email} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="passwordLogin">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Your Password" value={values.password} onChange={handleChange} />
                    </Form.Group>
                    <Button variant="success" onClick={handleSubmit} style={{width: "100%"}}>Login</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginModal;