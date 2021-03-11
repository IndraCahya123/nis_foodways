import React from 'react'
import {Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

function RestaurantCard(props) {
    const history = useHistory();
    const {name, logo, restId, key} = props;
    return (
        <div>
            <Card onClick={() => history.push(`/restaurant-product-detail/${restId}`)} style={{ cursor: "pointer" }}>
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
