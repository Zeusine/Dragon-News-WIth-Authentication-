import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Header from '../Header';
import Right from './Right';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const NewsDetails = () => {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState([]);
    const param = useParams();
    useEffect(() => {
        fetch("/news.json")
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    useEffect(() => {
        const selectingNews = news.filter(newz => { return newz.id == param.id })
        setSelectedNews(selectingNews)

    }, [news])

    console.log(selectedNews);
    





    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <main className='grid grid-cols-12 gap-6'>
                <section className='col-span-9'>
                    <h1 className='font-semibold text-gray-700 mb-5'>Dragon News</h1>
                    <div className="card bg-base-100  shadow-sm">
                        <figure className='w-3/4 mx-auto'>
                            <img className='object-cover  w-full '
                                src={selectedNews[0]?.image_url}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{selectedNews[0]?.title}</h2>
                            <p className='text-gray-500'>{selectedNews[0]?.details}</p>
                            <div className="card-actions ">
                                <Link to={`/category/${selectedNews[0]?.category_id}`} className="btn bg-orange-600 text-white"><FaLongArrowAltLeft></FaLongArrowAltLeft> All News In This Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className='col-span-3'><Right></Right></aside>
            </main>


        </div>
    );
};

export default NewsDetails;