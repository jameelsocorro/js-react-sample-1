import React from 'react';

const SleighdogsProduct = (props) => {

    const { title, desc, price } = props.product;

    return (
        <div className="product">                        
            <div className="product-img"></div>
            <div className="article__title">{title}</div>
            <div className="article__desc">{desc}</div>            
        </div>
    );
}

export default SleighdogsProduct;