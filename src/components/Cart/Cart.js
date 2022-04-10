import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props
    console.log(props.children)
    let total = 0
    let shipping = 0
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax

    return (
        <div className='cart'>
            <h1>order summary </h1>
            <p>Selected Items: {quantity}</p>
            <p>Total Price : $ {total} </p>
            <p>Total Shipping: $ {shipping} </p>
            <p>Tax : {tax}</p>
            <h5>grand Total: {grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;