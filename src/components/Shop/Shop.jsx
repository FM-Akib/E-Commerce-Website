// import React from 'react';
import { useState } from 'react';
import './Shop.css';
import { useEffect } from 'react';
import Product from '../Product/Product';


import Orders from '../Orders/Orders';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(() => {
        const storedShoppingCart=getShoppingCart();
        const SavedCart=[]

        for(const id in storedShoppingCart){
            const savedProduct=products.find(product => product.id===id);
            if(savedProduct){
                const previousCartQuantity=storedShoppingCart[id];
                savedProduct.quantity=previousCartQuantity;
                SavedCart.push(savedProduct);
            }   
        }
        setCart(SavedCart)
    },[products])
    
    const AddtoCart=(product)=>{
         const newCart =[...cart,product];
         setCart(newCart);
         addToDb(product.id)
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