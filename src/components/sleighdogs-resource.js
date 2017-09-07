import React from 'react';

const SleighdogsResource = (props) => {

    const { title, desc, imgSrc, linkTitle } = props.resource;

    return (
        <div className="resource">                        
            <div className="resource__img-container">
                <img className="resource__img" src={imgSrc} />
            </div>
            <div>
                <div className="article__title">{title}</div>
                <div className="article__desc">{desc}</div>
                <div className="resource__link">{linkTitle}</div>
            </div>            
        </div>
    );
}

export default SleighdogsResource;