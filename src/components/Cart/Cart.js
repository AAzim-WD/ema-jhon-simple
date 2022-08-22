import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    const total = cart.reduce((total, product) => total + product.price,0);
    
    const  toSets = (num) => {
          const result = Number(num).toFixed(2);
          return result;
    }
    let shipping = 0;
    if(total > 35) {
        shipping = 0;
    }
    else if(total > 20) {
        shipping = 4.99;
    }
    else if(total > 0) {
        shipping = 12.99;
    }
    const tax = total / 10;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-content'>
                <h2>Order Summary</h2>
                <h3><span>Order Items:</span> <span>{cart.length}</span></h3>
                <p><span>Item Price:</span> <span><strong>${toSets(total)}</strong></span></p>
                <p><span>Shipping and Handling:</span> <span><strong>${toSets(shipping)}</strong></span></p>
                <p><span>Total before tax:</span> <span><strong>${toSets(total + shipping)}</strong></span></p>
                <p><span>Estimated Tax:</span> <span><strong>${toSets(total / 10)}</strong></span></p>
                <h4><span>Total:</span><span>${toSets(grandTotal)}</span></h4>
        </div>
    );
};

export default Cart;<h1>Hello</h1>