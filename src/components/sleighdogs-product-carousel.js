import $ from 'jquery';
import React, {Component} from 'react';

import products from '../data/products'
import SleighdogsProduct from './sleighdogs-product';

class SleighdogsProductCarousel extends Component {

    componentDidMount() {
        const self = this;

        this.state = { 
            productSize: 296
        };

        this.updateDimensions(self);
        window.addEventListener("resize", () => this.updateDimensions(self));
    }
    
    componentWillUnmount() {        
        window.removeEventListener("resize", () => this.updateDimensions(self));
    }    

    next() {
        $('.mdi-chevron-left').removeClass('product-carousel__icon--disable');

        const slider = $('.product-carousel__slider');
        const productCount = slider.children().length;        
        const maxWidth = productCount * this.state.productSize;
        
        if (slider.width() > this.state.productSize) {
            for (var i = 0; i < productCount; i++) {
                const offsetLeft = (this.state.productSize * i);
                                
                if (slider.width() < offsetLeft) {
                    let left = parseInt(slider.css('left').replace('px', ''));
                    
                    if (left == 0) {
                        left = (slider.width() - offsetLeft);
                    }
                    else {
                        left += -this.state.productSize;
                    }                    
                    
                    if (window.screen.width > 375) {
                        if (Math.abs(left) < 25)
                            left = -this.state.productSize;
                    }                    
                    
                    const currentOffset = (slider.width() + Math.abs(left));                    
                    if (maxWidth >= currentOffset) {
                        slider.css("left",`${-Math.abs(left)}px`);

                        if (maxWidth <= currentOffset + 50)
                            $('.mdi-chevron-right').addClass('product-carousel__icon--disable');
                    }

                    break;
                }                    
            }            
        }
        else {            
            const left = parseInt(slider.css('left').replace('px', '')) + -this.state.productSize;
            const totalWidth = (productCount - 1) * this.state.productSize;
            
            if (totalWidth > Math.abs(left)) {
                slider.css("left",`${left}px`);                

                if (totalWidth <= Math.abs(left) + this.state.productSize) {
                    $('.mdi-chevron-right').addClass('product-carousel__icon--disable');
                }
            }            
        }
    }

    //optional use for prev one item at a time
    prev() {
        const self = this;
        $('.mdi-chevron-right').removeClass('product-carousel__icon--disable');        

        const slider = $('.product-carousel__slider');
        const offsetLeft = parseInt(slider.css('left').replace('px', ''));        
        const divider = (Math.abs(offsetLeft) / this.state.productSize);

        if (Math.abs(offsetLeft) < this.state.productSize) {
            this.updateDimensions(self);
        }            
        else {
            let left = 0;            
            
            if (offsetLeft < 0) {                
                if (divider % 1 == 0) {
                    left = offsetLeft + this.state.productSize;
                }
                else {
                    const extraSpace = offsetLeft - -Math.abs(this.state.productSize * Math.floor(divider));
                    left = offsetLeft - extraSpace;                    
                }
            }
        
            slider.css("left",`${left}px`);
        }            
    }

    //decided to use reset on prev button
    reset() {
        const self = this;
        this.updateDimensions(self);
    }

    updateDimensions(self) {
        const slider = $('.product-carousel__slider');
        $('.mdi-chevron-right').removeClass('product-carousel__icon--disable');
        $('.mdi-chevron-left').addClass('product-carousel__icon--disable');
        slider.removeAttr('style');
        
        if (window.innerWidth <= 640)
            self.setState({ productSize: 296 });
        else if (window.innerWidth <= 840)
            self.setState({ productSize: 348 });
        else if (window.innerWidth > 840)
            self.setState({ productSize: 382 });
    }
    
    renderProducts() {
        if (products && products.length > 0) {
            return products.map((product, key) => {
                return <SleighdogsProduct key={key} product={product} />
            });
        }
    }

    render() {
        return (
            <div className="product-carousel">
                <i onClick={this.reset.bind(this)} className="mdi mdi-chevron-left product-carousel__icon"></i>
                <div className="product-carousel__inner">
                    <div className="product-carousel__slider">
                        {this.renderProducts()}
                    </div>                
                </div>            
                <i onClick={this.next.bind(this)} className="mdi mdi-chevron-right product-carousel__icon"></i>
            </div>
        );
    }    
}

export default SleighdogsProductCarousel;