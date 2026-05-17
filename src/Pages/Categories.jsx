import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../component/NewsCard";

const Categories = () => {
    const { id } = useParams()
    const date = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {

        if (id == '0') {
            setCategoryNews(date);

        }
        else if (id == '1') {
            const filterNews = date.filter((news) => news.others.is_today_pick == true)
            setCategoryNews(filterNews);
        }
        else {
            const filteredNews = date.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews)

        }

    }, [date, id])

    return (
        <div>
            <h1 className="font-bold">Total <span className="text-secondary">{categoryNews.length}</span> news found</h1>
            <div className="grid grid-cols-1">
                {
                    categoryNews.map(news =>
                        <NewsCard key={news.id} news={news}>

                        </NewsCard>)
                }
            </div>
        </div>
    );
};

export default Categories;