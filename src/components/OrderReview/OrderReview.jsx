 import React from 'react';

import { useLoaderData } from "react-router-dom";
import Orders from "../Orders/Orders";
import Reviewitem from "../Reviewitem/Reviewitem";
import './OrderReview.css';
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";
const OrderReview = () => {
    const savedCart = useLoaderData();
    const [cart,setCart]=useState(savedCart);

const DeleteFromSavedCart=(id) => {
   const remaining=cart.filter(pd=>pd.id !== id)
    setCart(remaining);
    removeFromDb(id);
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
               <Orders cart={cart}></Orders>    
            </div>
        </div>
    );
};

export default OrderReview;