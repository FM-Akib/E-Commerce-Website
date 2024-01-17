// import React from 'react';
import './Orders.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';



const Orders = (prop) => {
    const {cart}=prop;

let totalPrice=0;
let totalShipping=0;
let GrandTotal=0;
let totalQuantity=0;
    for(const product of cart) {
        product.quantity=product.quantity||1;
        totalPrice+=product.price*product.quantity;
        totalShipping+=product.shipping;
        totalQuantity+=product.quantity; 
    }
    let tax=(totalPrice*7)/100;
    GrandTotal+=(totalPrice+totalShipping+tax);
    return (
        <div className="orders">
           <h4 className="order-summ-name">Order Summary    <FontAwesomeIcon icon={faClipboardList}/></h4>
                    <div className="order-summary-details">
                    <p>Selected Items: {totalQuantity}</p>          
                    <p>Total Price: ${totalPrice}</p>          
                    <p>Total Shipping Charge: ${totalShipping}</p>          
                    <p>Tax: ${tax.toFixed(2)}</p>          
                    <h4>Grand Total: ${GrandTotal.toFixed(2)}</h4>          
                    </div>
                    <button className='summery-btn clear-btn'>Clear Cart   <FontAwesomeIcon icon={faTrash} /></button>
                    <button className='summery-btn review-btn'>Review Order  <FontAwesomeIcon icon={faArrowRight}/></button> 
        </div>
    );
};

export default Orders;