import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const LatestNews = () => {
    return (
        <div className='flex gap-3 items-center bg-gray-200 p-3 rounded-lg'>
            <p className='bg-red-500 p-2 rounded-lg text-white'>Latest</p>
            <Marquee className='space-x-15' pauseOnHover="true" >
                <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, rem!</Link>
                <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, rem!</Link>
                <Link to="/news">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, rem!</Link>
            </Marquee>

        </div>
    );
};

export default LatestNews;