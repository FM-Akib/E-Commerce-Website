// import React from 'react';
import './Reviewitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';



const Reviewitem = ({cart,DeleteFromSavedCart}) => {
    const {id,name,img,quantity,price,shipping}=cart;
   
    return (
        <div className="review-item">
            <img src={img} alt=""/>

            <div className="item-details">
                <p className="product-title">{name}</p>
                <p className='product-details-mini'>Price: <span className="orrange">${price}</span></p>
                <p className='product-details-mini'>Quantity: <span className="orrange">{quantity}</span></p>
                <p className='product-details-mini'>Shipping Cost: <span className="orrange">${shipping}</span></p>
               
            </div>
            <button onClick={() =>DeleteFromSavedCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icn' icon={faTrashAlt} /></button>
        </div>
    );
};

export default Reviewitem;