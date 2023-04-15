import React, { useState, useEffect } from 'react';
import ParticlesBg from 'particles-bg'
import "./News.css";
import NewsItem from './NewsItem';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${process.env.REACT_APP_NEWS}${process.env.REACT_APP_NEWS_API_KEY}`, {
                method: "GET"
            });
            const data = await response.json();
            console.log(data)
            setNews(data.articles);
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="news row d-flex justify-content-center">
                    {news.map((key) => {
                        return (
                            <div key={key.url} className="newsItem col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center">
                                <NewsItem image={key.urlToImage} date={key.publishedAt} url={key.url} title={key.title} content={key.content} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <ParticlesBg type="square" bg={true} />

        </>
    )
}

export default News;
