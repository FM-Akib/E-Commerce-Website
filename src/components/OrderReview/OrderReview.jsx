// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Orders from "../Orders/Orders";

const OrderReview = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className="shop">
            <div className="shop-items">
              {
               
              }

            </div>
            <div >
               <Orders cart={cart}></Orders> 
                    
            </div>
        </div>
    );
};

export default OrderReview;