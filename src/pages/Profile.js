import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../contexts/userContext';

import LeftContent from '../components/ProfileLeftContent';
import RightContent from '../components/ProfileRightContent';

function Profile() {
    const history = useHistory()

    const [state] = useContext(UserContext);

    if (state.role === "customer") {
        return (
            <div className="d-flex justify-content-between" style={{ width: "80%", margin: "0 auto", padding: "164px 0 400px" }}>
                <LeftContent userRole="My Profile" selectedUser={ state.userId }/>
                <RightContent nameTransaction="Geprek Bensu" day="Thursday" date="11 Maret 2021" total="18.000"/>
            </div>
        )
    } else if (state.role === "partner") {
        return (
            <div className="d-flex justify-content-between" style={{ width: "80%", margin: "0 auto", padding: "164px 0 400px" }}>
                <LeftContent userRole="Partner Profile" selectedUser={ state.userId }/>
                <RightContent nameTransaction="Indra Cahya Bali" day="Friday" date="12 Maret 2021" total="24.000"/>
            </div>
        )
    } else {
        history.goBack();
    }
    
}

export default Profile
