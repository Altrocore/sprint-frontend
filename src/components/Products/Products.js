import React from 'react';
import './Products.css';
import Image from '../../images/index.js';

const Products = () => {
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
                    <div className='item'><img src={Image.ring8} alt=""/></div>
                    <div className='item'><img src={Image.ring6} alt=""/></div>
                    <div className='item'><img src={Image.ring4} alt=""/></div>
                    <div className='item'><img src={Image.ring2} alt=""/></div>
                    <div className='item'><img src={Image.ring62} alt=""/></div>
                    <div className='item'><img src={Image.ring5} alt=""/></div>
                    <div className='item'><img src={Image.ring7} alt=""/></div>
                    <div className='item'><img src={Image.ring1} alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default Products;