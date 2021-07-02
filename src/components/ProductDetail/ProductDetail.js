import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from './../../fakeData/index';
import Product from './../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product)
    
    return (
        <div>
            <Product product = {product} showCartButton ={false}></Product>
        </div>
    );
};

export default ProductDetail;