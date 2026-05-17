import { FaStar, FaRegStar, FaEye } from "react-icons/fa";
import { FiBookmark, FiShare2 } from "react-icons/fi";

const StarRating = ({ count, max = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: max }).map((_, i) =>
      i < count ? (
        <FaStar key={i} className="text-warning text-lg" />
      ) : (
        <FaRegStar key={i} className="text-warning text-lg" />
      )
    )}
    <span className="ml-1 text-base font-semibold text-base-content">
      {count}.0
    </span>
  </div>
);

const NewsCard = ({ news }) => {
  const {
    title,
    details,
    rating,
    total_view,
    author,
    thumbnail_url,
    tags,
    others,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card bg-base-100 shadow-sm w-full rounded-2xl border border-base-200 p-5 my-5 ">

      {/* Author Row */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-base-content leading-tight">
              {author.name}
            </p>
            <p className="text-xs text-base-content/50">
              {new Date(author.published_date).toISOString().slice(0, 10)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-base-content/40">
          <button className="btn btn-ghost btn-sm btn-circle">
            <FiBookmark size={18} />
          </button>
          <button className="btn btn-ghost btn-sm btn-circle">
            <FiShare2 size={18} />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-base-content leading-snug">
        {title}
      </h2>

      {/* Thumbnail */}
      <figure className="rounded-xl overflow-hidden">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full object-cover"
        />
      </figure>

      {/* Date + Tags + Details */}
      <div className="text-sm text-base-content/60 leading-relaxed">
        <span>{formattedDate}</span>
        {tags?.length > 0 && (
          <span>
            {" | Tag Cloud Tags: "}
            {tags.join(", ")}
          </span>
        )}
        {others?.is_trending && <span>, Trending</span>}
        <span> — {details?.slice(0, 120)}...</span>
      </div>

      {/* Read More */}
      <a href="#" className="text-error font-semibold text-sm -mt-2">
        Read More
      </a>

      {/* Divider */}
      <div className="divider my-0" />

      {/* Footer: Rating + Views */}
      <div className="flex items-center justify-between">
        <StarRating count={rating.number} />
        <div className="flex items-center gap-1.5 text-base-content/50 text-sm">
          <FaEye size={16} />
          <span>{total_view.toLocaleString()}</span>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;