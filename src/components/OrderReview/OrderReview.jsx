 import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Orders from "../Orders/Orders";
import Reviewitem from "../Reviewitem/Reviewitem";
import './OrderReview.css';
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const OrderReview = () => {
    const savedCart = useLoaderData();
    const [cart,setCart]=useState(savedCart);

const DeleteFromSavedCart=(id) => {
   const remaining=cart.filter(pd=>pd.id !== id)
    setCart(remaining);
    removeFromDb(id);
}
const handleClearCart=() => {
    setCart([]);
    deleteShoppingCart();
}

    return (
        <div className="shop">
            <div className="Review-container">
              {
                cart.map(cartItem=><Reviewitem
                   key={cartItem.id}
                   cart={cartItem}
                   DeleteFromSavedCart={DeleteFromSavedCart}
                ></Reviewitem>)
              }

            </div>

            <div >
               <Orders 
               cart={cart}
               handleClearCart={handleClearCart}
               > 
               <Link to='/checkout'>
               <button className='summery-btn review-btn'>Proceed Checkout <FontAwesomeIcon icon={faArrowRight}/></button>
               </Link>
                </Orders>    
               
            </div>
        </div>
    );
};

export default OrderReview;