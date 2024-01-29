// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Orders from "../Orders/Orders";
import Reviewitem from "../Reviewitem/Reviewitem";
import './OrderReview.css';
const OrderReview = () => {
    const cart = useLoaderData();
    



    return (
        <div className="shop">
            <div className="Review-container">
              {
                cart.map(cartItem=><Reviewitem
                   key={cartItem.id}
                   cart={cartItem}
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