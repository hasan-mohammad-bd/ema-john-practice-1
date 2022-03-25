import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props.cart);

    let totalPrice = 0;
    let totalShippingCost = 0;
    let totalQuantity = 0
    for(const product of props.cart){
        totalQuantity = totalQuantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingCost = totalShippingCost + product.shipping;
    }

    const tax = parseFloat((totalPrice * 8).toFixed(2));
    const grandTotal = totalPrice + totalShippingCost + tax;
    return (
        <div className='cart-container'>
            <h4>Selected quantity: {totalQuantity} </h4>
            <p>Total Price: {totalPrice} </p>
            <p>Total Shipping: {totalShippingCost}</p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: $ {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;