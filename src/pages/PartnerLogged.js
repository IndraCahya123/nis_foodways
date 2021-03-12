import React from 'react';
import {Table} from 'react-bootstrap';
import OkStat from '../images/ok.png';
import {Orders} from '../components/dummy';
import CancelStat from '../images/cancel.png';

function PartnerLogged() {
    const orders = Orders;
    return (
        <div className="landing-container w-100" style={{ height: "100vh" }}>
            <div className="wrapper" style={{ width: "80%", margin: "0 auto", padding: "164px 0 0" }}>
                <Table striped bordered hover size="sm">
                    <thead className="thead-dark">
                        <tr className="text-center">
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Customer Address</th>
                            <th>Customer Order</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => {
                            if (order.statusOrder === "Success") {
                                return(
                                    <tr>
                                        <td className="text-center">{order.id}</td>
                                        <td>{order.customerName}</td>
                                        <td>
                                            <address>{order.customerAddress}</address>
                                        </td>
                                        <td>{order.customerOrder}</td>
                                        <td style={{ color: "green", fontFamily: "'Nunito Sans'", fontWeight: "bold" }}>{order.statusOrder}</td>
                                        <td className="text-center">
                                            <img 
                                                src={OkStat}
                                                alt="Status Images"
                                            />
                                        </td>
                                    </tr>
                                );
                            } else if (order.statusOrder === "Cancel"){
                                return(
                                    <tr>
                                        <td className="text-center">{order.id}</td>
                                        <td>{order.customerName}</td>
                                        <td>
                                            <address>{order.customerAddress}</address>
                                        </td>
                                        <td>{order.customerOrder}</td>
                                        <td style={{ color: "darkred", fontFamily: "'Nunito Sans'", fontWeight: "bold" }}>{order.statusOrder}</td>
                                        <td className="text-center">
                                            <img 
                                                src={CancelStat}
                                                alt="Status Images"
                                            />
                                        </td>
                                    </tr>
                                );
                            } else if (order.statusOrder === "Waiting Approve"){
                                return(
                                    <tr>
                                        <td className="text-center">{order.id}</td>
                                        <td>{order.customerName}</td>
                                        <td>
                                            <address>{order.customerAddress}</address>
                                        </td>
                                        <td>{order.customerOrder}</td>
                                        <td style={{ color: "darkorchid", fontFamily: "'Nunito Sans'", fontWeight: "bold" }}>{order.statusOrder}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col">
                                                    <button className="btn-sm btn-danger w-100" style={{ border: "none" }}>Cancel</button>
                                                </div>
                                                <div className="col">
                                                    <button className="btn-sm btn-success w-100" style={{ border: "none" }}>Accept</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            } else if (order.statusOrder === "On The Way"){
                                return(
                                    <tr>
                                        <td className="text-center">{order.id}</td>
                                        <td>{order.customerName}</td>
                                        <td>
                                            <address>{order.customerAddress}</address>
                                        </td>
                                        <td>{order.customerOrder}</td>
                                        <td style={{ color: "darkcyan", fontFamily: "'Nunito Sans'", fontWeight: "bold" }}>{order.statusOrder}</td>
                                        <td className="text-center">
                                            <img 
                                                src={OkStat}
                                                alt="Status Images"
                                            />
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default PartnerLogged
