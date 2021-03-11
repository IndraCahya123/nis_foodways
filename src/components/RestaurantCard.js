import React from 'react'
import {Card} from 'react-bootstrap';

function RestaurantCard(props) {
    const {name, logo} = props;
    return (
        <div>
            <Card>
                <Card.Body>
                    <img
                        src={logo}
                        alt="Restaurant Brand"
                        width="65px"
                        height="65px"
                    />
                    <span style={{ fontFamily: "Abhaya Libre", fontSize: 22, marginLeft: 10 }}>{name}</span>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RestaurantCard
