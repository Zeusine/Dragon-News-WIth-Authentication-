
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NewsCard from './NewsCard';

const Middle = () => {
    const param = useParams();

    const [news, setNews] = useState([]);
    const [conditionalNews, setConditionalNews] = useState([])

    useEffect(() => {
        fetch("/news.json")
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    const filteredNews = news.filter(newItem => newItem.category_id == param.id)
    
    

    useEffect(() => {
        if (param.id == "0") {


           
            
            setConditionalNews(news)
        }
        else {
            if (filteredNews) {
                setConditionalNews(filteredNews)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param.id,news])
    
    







    return (
        <div>
            <h1 className='font-semibold'>Dragon News Home </h1>
            <div className='w-full p-4'>
                {
                    conditionalNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Middle;