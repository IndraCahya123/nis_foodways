import React from 'react'
import {useParams} from 'react-router-dom';
import LeftContent from '../components/ProfileLeftContent';
import RightContent from '../components/ProfileRightContent';
import CustomerProfile from '../images/customer_rect.png';
import PartnerProfile from '../images/partner_rect.png'

function Profile() {
    const {role} = useParams()

    if (role === "customer") {
        return (
            <div className="d-flex justify-content-between" style={{ width: "80%", margin: "0 auto", padding: "164px 0 400px" }}>
                <LeftContent userRole="My Profile" profileImage={CustomerProfile} username="Customer Name" userEmail="customer@email.com" userPhone="Customer Phone Number"/>
                <RightContent nameTransaction="Geprek Bensu" day="Thursday" date="11 Maret 2021" total="18.000"/>
            </div>
        )
    } else if (role === "partner") {
        return (
            <div className="d-flex justify-content-between" style={{ width: "80%", margin: "0 auto", padding: "164px 0 400px" }}>
                <LeftContent userRole="Partner Profile" profileImage={PartnerProfile} username="Partner Name" userEmail="partner@email.com" userPhone="Partner Phone Number"/>
                <RightContent nameTransaction="Indra Cahya Bali" day="Friday" date="12 Maret 2021" total="24.000"/>
            </div>
        )
    } else {
        return(
            <div className="d-flex justify-content-between" style={{ width: "80%", margin: "0 auto", padding: "164px 0 400px" }} >
                <h1>You are not allowed in here</h1>
            </div>
        );
    }
    
}

export default Profile
