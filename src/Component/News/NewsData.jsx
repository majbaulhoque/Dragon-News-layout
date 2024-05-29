import React from 'react';

const NewsData = ({read}) => {
    const {title} = read || {}
    return (
        <div>
            <p className='text-2xl font-semibold mb-5'>Dragon News</p>
            <p>{title}</p>
        </div>
    );
};

export default NewsData;