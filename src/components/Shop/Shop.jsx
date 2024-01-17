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
right
            </div>
        </div>
    );
};

export default Shop;