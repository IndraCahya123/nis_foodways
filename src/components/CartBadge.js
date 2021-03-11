import React from 'react'
import {Badge} from 'react-bootstrap';

function CartBadge() {
    return (
        <div style={{ position: "relative", display: "inline-block", bottom: 10 }}>
            <Badge variant="danger" style={{ borderRadius: "50%" }}>1</Badge>
        </div>
    )
}

export default CartBadge
