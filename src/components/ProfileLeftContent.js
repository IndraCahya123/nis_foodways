import { useHistory } from 'react-router-dom';

import { User } from '../api/dummy';

function ProfileLeftContent(props) {
    const history = useHistory()

    const findItem = () => {
        const selected = User.find(item => item.id === parseInt(props.selectedUser));
        return selected;
    }

    const item = findItem();

    return (
        <div className="d-flex flex-column">
            <p className="profile-title" style={{ fontSize: 36, fontFamily: "'Abhaya Libre'" }}>{props.userRole}</p>
            <div className="d-flex">
                <div style={{ cursor: "pointer" }} className="profile-image mr-5" onClick={() => history.push("/edit-profile")}>
                    <img
                        src={item.profilePicture}
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
                        <p style={{ fontWeight: "400px" }}>{item.username}</p>
                    </div>
                    <div className="user-email">
                        <span style={{ fontWeight: "800", color: "#613D2B" }}>Email</span>
                        <p style={{ fontWeight: "400px" }}>{item.email}</p>
                    </div>
                    <div className="user-phone">
                        <span style={{ fontWeight: "800", color: "#613D2B" }}>Phone</span>
                        <p style={{ fontWeight: "400px" }}>{item.phone}</p>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 20 }}>
                <button type="button" className="btn btn-dark" style={{ width: 180 }} onClick={() => history.push("/edit-profile")}>Edit Profile</button>
            </div>
        </div>
    );
}

export default ProfileLeftContent
