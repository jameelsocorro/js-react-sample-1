import React from 'react';

import SleighdogsProductCarousel from './sleighdogs-product-carousel';

const SleighdogsProducts = () => {
    return (
        <div className="article-section">
            <div className="article-header display-1">Feature Products</div>
            <div className="products">
                <SleighdogsProductCarousel />
                <div className="product-btn">Shop the range</div>              
            </div>            
        </div>
    );
}

export default SleighdogsProducts;