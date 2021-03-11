import React from 'react';
import CartBadge from './CartBadge';
import CartIcon from '../images/cart.png';

function Cart() {
    return (
        <>
            <button style={{ background: "none", border: "none", padding: "auto 0" }}>
                <img
                    src={CartIcon}
                    alt="Cart"
                    width="35px"
                    height="32px"
                />
                <CartBadge />
            </button>
        </>
    )
}

export default Cart
