import React from 'react';

const NewsData = ({read}) => {
    const {title, image_url,
        details} = read || {}
    return (
        <div>
            <p className='text-2xl font-semibold mb-5'>Dragon News</p>
            <img src={image_url} alt="" />
            <p className='font-bold text-xl pt-5 pb-2 px-5'>{title}</p>
            <p className='text-justify px-5'>{details}</p>
        </div>
    );
};

export default NewsData;