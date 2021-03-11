import React from 'react'

function ProfileLeftContent(props) {
    return (
        <div className="d-flex flex-column">
            <p className="profile-title" style={{ fontSize: 36, fontFamily: "'Abhaya Libre'" }}>{props.userRole}</p>
            <div className="d-flex">
                <div className="profile-image mr-5">
                    <img 
                        src={props.profileImage}
                        alt="Profile Image"
                        width="180px"
                        height="220px"
                        style={{
                            borderRadius: 5
                        }}
                    />
                </div>
                <div className="profile-detail d-flex flex-column justify-content-around" style={{ fontSize: 18, fontFamily: "'Nunito Sans'", padding: "5px 0", height: 220 }}>
                    <div className="name">
                        <span style={{ fontWeight: "800", color: "#613D2B" }}>Name</span>
                        <p style={{ fontWeight: "400px" }}>{ props.username }</p>
                    </div>
                    <div className="user-email">
                        <span style={{ fontWeight: "800", color: "#613D2B" }}>Email</span>
                        <p style={{ fontWeight: "400px" }}>{ props.userEmail }</p>
                    </div>
                    <div className="user-phone">
                        <span style={{ fontWeight: "800", color: "#613D2B" }}>Phone</span>
                        <p style={{ fontWeight: "400px" }}>{ props.userPhone }</p>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 20 }}>
                <button className="btn btn-dark" style={{ width: 180 }}>Edit Profile</button>
            </div>
        </div>
    )
}

export default ProfileLeftContent
