import React from 'react'
import {Form, Col} from 'react-bootstrap';

function AddProduct() {
    return (
        <div className="form-container" style={{ width: "100%", height: "100vh" }}>
            <div className="form-wrapper d-flex flex-column" style={{ padding: "164px 0 0", margin: "0 auto", width: "80%" }} >
                <span style={{ fontFamily: "'Abhaya Libre'", fontSize: 36, fontWeight: "bold", margin: "0 0 30px 10px" }}>Add Product</span>
                <Form>
                    <Form.Row className="mb-3">
                        <Col md="9">
                            <Form.Control placeholder="Product Name" />
                        </Col>
                        <Col>
                            <Form.File 
                                id="add-product-image-file"
                                label="Attach file"
                                data-browse="&#10149;"
                                custom
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Product Price" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mt-5">
                        <Col md={{ span: 3, offset: 9 }}>
                            <button className="btn btn-dark" style={{ width: "100%" }}>Save</button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        </div>
    )
}

export default AddProduct
