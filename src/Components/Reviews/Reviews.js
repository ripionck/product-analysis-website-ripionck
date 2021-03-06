import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './Reviews.css'


const Reviews = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1 className="heading">Latest Shoe Model Reviews</h1>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Reviews;