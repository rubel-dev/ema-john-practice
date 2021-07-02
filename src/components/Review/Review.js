import React from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import fakeData from './../../fakeData/index';

const Review = () => {
    const savedCart = getDatabaseCart()
    const productKeys = Object.keys(savedCart);
   const products =  productKeys.map(key =>{
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = savedCart[key]
        return product
    })
     
    return (
        <div>
            <h3>Cart Items : {products.length}</h3>
            {
                products.map(pd=><ReviewItem product = {pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;