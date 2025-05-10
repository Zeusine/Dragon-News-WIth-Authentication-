import React from 'react';
import { FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const truncateDescription = (description, length) => {
        if (description.length > length) {
            return description.substring(0, length) + '...';
        }
        return description;
    };
    return (
        <div className="card w-full  bg-base-100 shadow-xl border-black mb-5">
            <figure>
                <img src={news.thumbnail_url} alt={news.title} className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-3" src={news.author.img} alt={news.author.name} />
                    <div>
                        <h2 className="font-medium text-sm">{news.author.name}</h2>
                        <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <h3 className="card-title text-xl font-semibold">{news.title}</h3>
                <p className="text-gray-700 text-base">
                    {truncateDescription(news.details, 150)} {/* Truncate to 150 characters */}
                    <button className='text-yellow-600 font-black'>Read More</button>
                </p>
                <hr className='border-gray-200' />

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                        <div className="rating">
                            <div className="mask mask-star" aria-label="1 star" aria-current= {news.rating.number == 1? "true" : "false" }></div>
                            <div className="mask mask-star" aria-label="2 star" aria-current= {news.rating.number == 2? "true" : "false" }></div>
                            <div className="mask mask-star" aria-label="3 star" aria-current= {news.rating.number == 3? "true" : "false" }></div>
                            <div className="mask mask-star" aria-label="4 star" aria-current= {news.rating.number == 4? "true" : "false" }></div>
                            <div className="mask mask-star" aria-label="5 star" aria-current= {news.rating.number == 5? "true" : "false" }></div>
                        </div>
                        <span className="ml-2 font-semibold text-gray-500">{news.rating.number}</span>
                    </div>
                    <div className="flex items-center">
                        <span className='font-semibold text-gray-500 flex items-center gap-2'><FaEye></FaEye> {news.total_view} </span>
                    </div>
                </div>
                <div className="card-actions justify-end mt-3">

                </div>
            </div>
        </div>
    );
};

export default NewsCard;