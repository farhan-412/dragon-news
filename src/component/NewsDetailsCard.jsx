import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
    console.log(news)

    const { title, details,  image_url, } = news

    return (
        <div className="space-y-5">
            <img className="w-full h-[550px] object-cover" src={image_url} alt="" />

            <h2 className="text-2xl">{title}</h2>

            <p>{details}</p>
            <Link className="btn btn-secondary" to ={`/category/${news.category_id}`}> Back to Category</Link>
        </div>

    );
};

export default NewsDetailsCard;