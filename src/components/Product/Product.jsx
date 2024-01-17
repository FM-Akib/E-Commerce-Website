import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//   import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
      const {name,img,price,seller,ratings}=props.product;
      const AddtoCart=props.AddtoCart;
    return (
        <div className='product-card'>
            <img src={img} alt="product"></img>
        <div className='product-details'>
        <h6>{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
        </div>
           <button onClick={()=>AddtoCart(props.product)} className="cart-btn">Add To Cart  <FontAwesomeIcon icon={faCartShopping} />
           </button>
        </div>
    );
};

export default Product;