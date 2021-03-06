import React from 'react';
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';
import TopLandingPage from '../components/TopLandingPage';
import RestaurantCard from '../components/RestaurantCard';
import NearestRestaurantCard from '../components/NearestRestaurantCard';
import {Restaurant, NearestRestaurants} from '../components/dummy';

function LandingPage(){
    return(
        <div>
            <TopLandingPage />
            <ContentLandingPage />
        </div>
    );
}

function ContentLandingPage(){
    return(
        <div className="content">
            <Popular />
            <NearYou />
        </div>
    );
}

function Popular(){
    return(
        <Container style={{ margin: "50px auto 0", fontFamily: "Abhaya Libre", marginTop: 50 }}>
            <Row style={{ marginBottom: 20 }}>
                <h3>Popular Restaurant</h3>
            </Row>
            <Row>
                <CardDeck>
                    {Restaurant.map((item) => 
                        <RestaurantCard key={item.id} name={item.name} logo={item.logo} />
                    )}
                </CardDeck>
            </Row>
        </Container>
    );
}

function NearYou(){
    return(
        <Container style={{ marginTop: 50, paddingBottom: 50 }}>
            <Row style={{ marginBottom: 20 }}>
                <h3 style={{ fontFamily: "Abhaya Libre" }}>Restaurant Near You</h3>
            </Row>
            <Row>
                <CardDeck>
                    {NearestRestaurants.map((items) => <NearestRestaurantCard key={items.id} name={items.name} img={items.img} distance={items.distance} />)}
                </CardDeck>    
            </Row>
        </Container>
    );
}

export default LandingPage;