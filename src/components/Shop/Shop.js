import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 80);
    const [products, setProducts] = useState(first10);
    const [cart, setChart] = useState([]);

    const handleProduct = (product) => {
      const newCart = [...cart, product];
      setChart(newCart);
    }

    return (
            <div className="shop-container">
               <div className="products-container">
                 {
                    products.map(items => <Products key={items.key} handleProduct={handleProduct} product = {items} /> )
                 }
               </div>
               <div className="cart-container">
                 <Cart cart ={cart} />
               </div>
            </div>
    );
};

export default Shop;