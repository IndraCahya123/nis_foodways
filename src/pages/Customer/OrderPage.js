import { useContext, useState, } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Col, Modal, Button } from 'react-bootstrap';

import { OrderContext } from '../../contexts/orderContext';

import Map from '../../components/micro/Map';

import MapsIcon from '../../images/maps.png';
import RemoveIcon from '../../images/remove.png';



const OrderPage = () => {
    const history = useHistory();

    const [state, dispatch] = useContext(OrderContext);

    const [mapsShow, setMapsShow] = useState(false);

    const totalQuantityAllOrder = () => {
        const getQty = state.orders.map(product => product.qty);

        let total = 0;

        for (let i = 0; i < getQty.length; i++) {
            total = total + getQty[i];
        }

        return total;
    }

    const checkoutOrderButtonDisabled = () => {
        if (state.orders.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div style={{ padding: "103px 0 50px" }}>
            <div className="order-wrapper d-flex flex-column" style={{ minHeight: "100vh" ,width: "80%", margin: "0 auto" }}>
                {state.orders.length === 0 ? 
                    <p style={{ fontFamily: "'Abhaya Libre'", fontSize: 36, letterSpacing: 2 }}>Restaurant</p>
                    : <p style={{ fontFamily: "'Abhaya Libre'", fontSize: 36, letterSpacing: 2 }}>{ state.restaurant }</p>
                }
                <div className="location-wrapper w-100">
                    <span style={{ color: "#613D2B", fontFamily: "'Nunito Sans'", fontSize: 18, marginLeft: 5, fontWeight: "bolder" }}>Delivery Location</span>
                    <Form style={{ marginTop: 10 }}>
                        <Form.Row>
                            <Col md="9">
                                <Form.Control type="text" name="location" placeholder="set your location" />
                            </Col>
                            <Col md="3">
                                <button type="button" onClick={() => setMapsShow(true)} className="btn btn-dark w-100">
                                    <span>
                                    Select On Map
                                        <img
                                        src={MapsIcon}
                                        alt="Maps Icon"
                                        className="ml-3"
                                    />
                                    </span>
                                </button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
                <div className="product-order-wrapper w-100 mt-5" >
                    <p style={{ color: "#613D2B", fontFamily: "'Nunito Sans'", fontSize: 18, marginLeft: 5, marginBottom: 5, fontWeight: "bolder" }} >Review Your Order</p>
                    <div className="product-order d-flex justify-content-between">
                        {state.orders.length === 0 ?
                            <button type="button" onClick={() => history.push("/")} className="btn btn-dark" style={{ height: 40, width: "25%", margin: "auto" }}>Order Now</button> : 
                            <div className="products" style={{ width: "70%" }} >
                            <hr />
                            {state.orders.map(product => <Products product={product} dispatch={dispatch} className="w-100"/> )}
                            </div>
                            }
                        <div className="total-price" style={{ width: "25%" }} >
                            <hr />
                            <TotalPrice total={totalQuantityAllOrder()} isDisabled={checkoutOrderButtonDisabled()} dispatch={dispatch} />
                        </div>
                    </div>
                </div>
            </div>
            <MapsModalSetLocation show={mapsShow} onHide={() => setMapsShow(false)} />
        </div>
    )
}

function Products(props) {

    const removeProduct = () => {
        props.dispatch({
            type: "REMOVE_PRODUCT",
            payload: {
                id: props.product.id,
            },
        })
    }

    const decreaseQuantity = () => {
        props.dispatch({
            type: "DECREASE_QTY",
            payload: {
                id: props.product.id
            }
        })
    }

    const increaseQuantity = () => {
        props.dispatch({
            type: "INCREASE_QTY",
            payload: {
                id: props.product.id
            }
        })
    }

    return (
        <>
            <div className="d-flex">
                <div className="product-image mr-2">
                    <img
                        src={props.product.imgUrl}
                        alt="Product Image"
                        width="80px"
                        height="80px"
                    />
                </div>
                <div className="d-flex flex-column w-100 py-2">
                    <div className="d-flex justify-content-between mb-2">
                        <span style={{ fontFamily: "'Nunito Sans'", fontWeight: "bold" }}>{ props.product.name }</span>
                        <span style={{ color: "red" }}>Rp. { props.product.price }</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="quantity-order d-flex align-items-center">
                            <span style={{ fontSize: 14, margin: "0 4px", fontWeight: "bold", cursor: "pointer" }} onClick={
                                () => {
                                    props.product.qty === 1 ? removeProduct() : decreaseQuantity()
                                }
                            }>-</span>
                            <Form.Control value={props.product.qty} style={{ width: 35, height: 20 }} />
                            <span style={{ fontSize: 14, margin: "0 4px", fontWeight: "bold", cursor: "pointer" }} onClick={
                                () => increaseQuantity()
                            }>+</span>
                        </div>
                        <button type="button" onClick={() => removeProduct()} style={{ background: "none", border: "none" }}>
                            <img
                                src={RemoveIcon}
                                alt="Remove Order Icon"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

function TotalPrice(props) {
    const checkoutOrders = () => {
        props.dispatch({
            type: "CHECKOUT_ORDERS"
        });
    }

    const [mapsShow, setMapsShow] = useState(false);

    return (
        <>
            <div className="sub-total d-flex justify-content-between">
                <span>Subtotal</span>
                <span style={{ color: "red" }}>Rp. 45.000</span>
            </div>
            <div className="quantity d-flex justify-content-between">
                <span>Qty</span>
                <span>{ props.total }</span>
            </div>
            <div className="Ongkir d-flex justify-content-between">
                <span>Ongkir</span>
                <span style={{ color: "red" }}>Rp. 11.000</span>
            </div>
            <hr />
            <div className="total-all-product d-flex justify-content-between">
                <span>Total</span>
                <span style={{ color: "red" }}>Rp. 101.000</span>
            </div>
            <div className="button-section d-flex justify-content-end" style={{ marginTop: 80 }}>
                {props.isDisabled ?
                    <button type='button' className="btn btn-dark w-75" disabled>Checkout Order</button>
                : <button type='button' className="btn btn-dark w-75" onClick={
                        () => {
                            setMapsShow(true);
                        }
                }>Checkout Order</button> }
            </div>
            <MapsModalSetLocation show={mapsShow} onHide={() => setMapsShow(false)} />
        </>
    );
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

export default OrderPage;

