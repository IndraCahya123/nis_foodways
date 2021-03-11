import React from 'react'
import LeftContent from '../components/ProfileLeftContent';
import RightContent from '../components/ProfileRightContent';
import CustomerProfile from '../images/customer_rect.png';

function Profile() {
    return (
        <div className="d-flex justify-content-between" style={{ width: "80%", margin: "0 auto", padding: "164px 0 400px" }}>
            <LeftContent userRole="My Profile" profileImage={CustomerProfile} username="Customer Name" userEmail="customer@email.com" userPhone="Customer Phone Number"/>
            <RightContent nameTransaction="Geprek Bensu" day="Thursday" date="11 Maret 2021" total="18.000"/>
        </div>
    )
}

export default Profile
