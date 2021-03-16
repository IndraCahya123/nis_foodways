import { useContext, useState } from 'react';
import { Form, Col, Modal, Button } from 'react-bootstrap';

import { UserContext } from '../contexts/userContext';

import { User } from '../api/dummy';

import Map from '../components/micro/Map';

import MapsIcon from '../images/maps.png';

const EditProfile = () => {
    const [showMaps, setShowMaps] = useState(false);

    const [state] = useContext(UserContext);

    const findUser = () => {
        const selected = User.find(item => item.id === parseInt(state.userId));
        return selected;
    }

    const item = findUser();

    return (
        <div className="form-container" style={{ width: "100%", height: "100vh", paddingTop: 120 }}>
            <div style={{ width: "80%", margin: "0 auto" }}>
                <p>Edit Profile</p>
                <Form>
                    <Form.Row className="mb-3">
                        <Col md="9">
                            <Form.Control type="text" name="fullName" value={item.username} placeholder="Name" />
                        </Col>
                        <Col md="3">
                            <Form.File
                            id="custom-file"
                            label="Attach Image"
                            custom/>
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-3">
                        <Col>
                            <Form.Control type="email" value={item.email} name="email" placeholder="Email" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-3">
                        <Col>
                            <Form.Control type="text" name="phone" value={item.phone} placeholder="Phone Number" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-3">
                        <Col md="9">
                            <Form.Control type="text" name="location" placeholder="Set Location" />
                        </Col>
                        <Col md="3">
                            <button type="button" className="btn btn-dark w-100" onClick={() => setShowMaps(true)}>Select On Map <img src={MapsIcon} alt="Select Location Icon" /> </button>
                        </Col>
                    </Form.Row>
                    <Form.Row className="mt-5">
                        <Col md={{ span: "4", offset: "8" }}>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-dark" style={{ width: "80%" }}>Save</button>
                            </div>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
            <MapsModalSetLocation show={showMaps} onHide={() => setShowMaps(false)} />
        </div>
    )
}

function MapsModalSetLocation(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Body style={{ height: "100%" }}>
            <Map />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default EditProfile

