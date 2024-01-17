import React from 'react';
import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(data=>setProducts(data))
    },[])
    
    return (
        <div className="shop">
            <div className="shop-items">
              {
                products.map(product =><Product 
                    key={product.id}
                    product={product}
                ></Product>)
              }

            </div>
            <div className="orders">
                
                    <h4 className="order-summ-name">Order Summary</h4>
                    <div className="order-summary-details">
                    <p>Selected Items: 6</p>          
                    <p>Total Price: $1140</p>          
                    <p>Total Shipping Charge: $5</p>          
                    <p>Tax: $114</p>          
                    <p>Grand Total: $1559</p>          
                    </div>
                    <button className='summery-btn clear-btn'>Clear Cart</button>
                    <button className='summery-btn review-btn'>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;