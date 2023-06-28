import React, { useState, useContext } from 'react';
import './Products.css';
import Image from '../../images/index.js';
import products from '../../data.js';
import { CartContext } from './CartContext';

const Products = () => {
    const [cartItems, setCartItems] = useState([]);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart();
    };
    /*const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };*/
    return (
        <div className='products-box'>
            <div className='products-box1'>
                <div className='tag-1'>New Summer Collection!</div>
                <div className='selection'>
                    <div className='img-1'><img src={Image.img1} alt=""/></div>
                    <img className='ring-11' src={Image.ring11} alt=""/>
                    <img className='ring-9' src={Image.ring9} alt=""/>
                    <img className='ring-3' src={Image.ring3} alt=""/>
                    <img className='ring-10' src={Image.ring10} alt=""/>
                    <div className='img-2'><img src={Image.img2} alt=""/></div>
                </div>
            </div>
            <div className='products-box2'>
                <div className='box-1'>
                    {products.map((product) => (
                        <div className='item' key={product.id}>
                            <img src={product.image} alt="img"/>
                            <p>{product.price}</p>
                            <button onClick={handleAddToCart} className='btn-cart'>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;