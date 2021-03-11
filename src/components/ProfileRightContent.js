import React from 'react';
import Brand from '../images/fw_logo.png';

function ProfileRightContent(props) {
    return (
        <div className="d-flex flex-column" style={{ borderRadius: 5, width: "420px" }}>
            <p style={{ fontFamily: '"Abhaya Libre"', fontWeight: "bold", fontSize: 36 }}>History Transaction</p>
            <div className="history-card d-flex justify-content-between" style={{ backgroundColor: "#fff", padding: "20px 16px" }}>
                <div className="detail-transaction">
                    <span style={{ fontFamily: "'Abhaya Libre'", fontSize: 14 }}>{props.nameTransaction}</span>
                    <p style={{ fontFamily: "'Nunito Sans'", fontSize: 9, }}><span style={{ fontWeight: "bold" }}>{props.day},</span> {props.date}</p>
                    <span style={{ fontSize: 10, fontFamily: "'Nunito Sans'", fontWeight: "bold", color: "#974A4A" }}>Total : Rp. {props.total}</span>
                </div>
                <div className="logo-trancsaction d-flex flex-column">
                    <div className="brand">
                        <span style={{ fontSize: 23, fontFamily: "'Barlow Condensed'", fontStyle: "italic" }}>WaysFood</span>
                        <img 
                            src={Brand}
                            alt="Brand Logo"
                            width="35px"
                            height="35px"
                        />
                    </div>
                    <button className="btn-sm" style={{ width: 112, background: "linear-gradient(180deg, #00FF75 0%, #00FF85 100%)", color: "#000",border: "none", marginTop: 10 }}> Finished</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileRightContent
