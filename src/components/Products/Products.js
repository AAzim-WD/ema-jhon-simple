import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock, features, category} = props.product;
   
    return (
        <div className='product'>
            <div className='img-container'>
                <img src={img} alt={category} />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <div className="items-description">
                    <div>
                        <p>${price}</p>
                        <p>
                            <small>only {stock} left in stock - order soon</small>
                        </p>
                        <button
                         onClick={() => props.handleProduct(props.product)}
                         className='add-to-cart-btn'
                         >
                        <FontAwesomeIcon icon={faShoppingCart} /><span>add to cart</span>
                        </button>
                    </div>
                    <div>
                        <span></span>
                        <h4>Features</h4>
                        <ul>
                            {
                            features.map((feature,index) => <li key={index} className='features-list'>{feature.description} : <strong>{feature.value}</strong></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;