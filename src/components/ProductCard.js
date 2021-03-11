import React from 'react'

function ProductCard(props) {
    const {name, imgUrl, price} = props.product;
    return (
        <div className="d-flex flex-column my-5" style={{ backgroundColor: "#fff", padding: 10, borderRadius: 5 }}>
            <img 
                src={imgUrl}
                alt="Product Image"
                width="224px"
                height="134px"
            />
            <div className="product-text d-flex flex-column my-4" style={{ width: 224 }}>
                <span style={{ fontSize: 18, fontFamily: "'Abhaya Libre'", fontWeight: "bold", height: 55 }}>{name}</span>
                <span style={{ fontSize: 14, fontFamily: "'Nunito Sans'", color: "#FF1515" }}>{price}</span>
            </div>
            <button className="btn-sm" style={{ background: "#FFC700", width: "100%", border: "none", fontSize: "14px", fontFamily: "'Nunito Sans'", fontWeight: "bold" }}>Order</button>
        </div>
    )
}

export default ProductCard
