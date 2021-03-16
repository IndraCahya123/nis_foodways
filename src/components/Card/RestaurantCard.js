import { useContext } from 'react';
import {useHistory} from 'react-router-dom';

import { Card } from 'react-bootstrap';

import { UserContext } from '../../contexts/userContext';

function RestaurantCard(props) {
    const history = useHistory();

    const [state] = useContext(UserContext);

    const loginStatus = (id) => {
        if (state.loginStatus === true) {
            history.push(`/restaurant-product-detail/${id}`);
        } else {
            alert("Login To Order");
            history.push(`/`);
        }
    }

    const {name, logo, restId} = props;
    return (
        <div>
            <Card onClick={() => loginStatus(restId)} style={{ cursor: "pointer" }}>
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
