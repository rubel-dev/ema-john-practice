import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product)=> total + product.price,0)
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax =( shipping + total)*.1;
    const grandTotal = shipping + tax + total;
    const handleFormated =(price)=>{
        const result = Number(price).toFixed(2)
        return result;
    }
    return (
        <div>
           <h4>Order Summary</h4>
           <p>Items Ordered : {cart.length}</p>
           <p>Product Price :{handleFormated(total)} </p>
           <p>Shipping Cost :{shipping} </p>
           <p>Tax + VAT : {handleFormated(tax)} </p>
           <p>Total Price : {handleFormated(grandTotal)}</p>
           <Link to='/review'>
              <button className='main-button'>Review Order</button>
           </Link>
        </div>
    );
};

export default Cart;