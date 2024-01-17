import React from 'react';
import './Orders.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';



const Orders = (props) => {
    const {cart}=props.cart;
    return (
        <div className="orders">
           <h4 className="order-summ-name">Order Summary    <FontAwesomeIcon icon={faClipboardList}/></h4>
                    <div className="order-summary-details">
                    <p>Selected Items:</p>          
                    <p>Total Price: $1140</p>          
                    <p>Total Shipping Charge: $5</p>          
                    <p>Tax: $114</p>          
                    <p>Grand Total: $1559</p>          
                    </div>
                    <button className='summery-btn clear-btn'>Clear Cart   <FontAwesomeIcon icon={faTrash} /></button>
                    <button className='summery-btn review-btn'>Review Order  <FontAwesomeIcon icon={faArrowRight}/></button> 
        </div>
    );
};

export default Orders;