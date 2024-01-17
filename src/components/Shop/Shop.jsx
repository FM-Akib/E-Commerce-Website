// import React from 'react';
import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';


import Orders from '../Orders/Orders';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(data=>setProducts(data))
    },[])
    
    const AddtoCart=(pro)=>{
         const newCart =[...cart,pro];
         setCart(newCart);
    }

    return (
        <div className="shop">
            <div className="shop-items">
              {
                products.map(product =><Product 
                    key={product.id}
                    product={product}
                    AddtoCart={AddtoCart}
                ></Product>)
              }

            </div>
            <div >
               <Orders cart={cart}></Orders> 
                    
            </div>
        </div>
    );
};

export default Shop;