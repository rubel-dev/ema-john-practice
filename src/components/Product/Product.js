import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => { 
     
    const {name,img,stock,price,category,key} = props.product;
    const handleCartProduct = props.handleCartProduct;
    return (
        <div className='product-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-content'>
              <h4 className='product-name'><Link to ={"/product/"+key}>{name}</Link></h4>
                <p>by : {category}</p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock --order soon</small></p>
                {
                    props.showCartButton && <button onClick={()=>handleCartProduct(props.product)} className='main-button'><FontAwesomeIcon icon={faShoppingCart} />  Add To Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;