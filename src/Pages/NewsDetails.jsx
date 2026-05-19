import { useLoaderData, useParams } from "react-router";
import Header from "../component/Header";
import RightAside from "../component/homelayout/RightAside";
import { useEffect, useState } from "react";
import NewsDetailsCard from "../component/NewsDetailsCard";

const NewsDetails = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        const newsDetail = data.find((singleNews) => singleNews.id == id)
        setNews(newsDetail)
    }, [data, id])

    return (
        <div>
            <header className="py-3">
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-20">
                <section className="col-span-9">
                    <h2 className="font-bold">News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;