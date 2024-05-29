import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ aNews }) => {
    const {
        _id,
        others_info: { is_todays_pick, is_trending },
        category_id,
        rating: { number: ratingNumber, badge: ratingBadge },
        total_view,
        title,
        author: { name: authorName, published_date, img: authorImg },
        thumbnail_url,
        image_url,
        details
    } = aNews || {};
    return (
        <div>
            <div className="mb-6">
                <div className="px-5 py-3 bg-slate-50">
                    <div className="flex items-center">
                        <div className="mr-3">
                            <img className="rounded-full w-10" src={authorImg} alt="" />
                        </div>
                        <div>
                            <p className="font-semibold text-black">{authorName}</p>
                            <p>{published_date}</p>
                        </div>
                        <div className="flex text-xl lg:ml-80">
                            <FaRegBookmark />
                            <FaShareAlt className="lg:ml-4" />
                        </div>
                    </div>
                </div>
                <h3 className="font-bold text-xl py-3 px-5">{title}</h3>
                <img className="w-full py-3 px-5" src={image_url} alt="" />
                <div className="px-5">
                    {
                        details.length > 225 ? <p className="border-b py-3">{details.slice(0, 225)}<Link className="text-amber-400 font-bold" to={`/aNews/${_id}`}> Read More...</Link></p>
                            :
                            <p>{details}</p>
                    }
                </div>
                <div className="flex items-center px-5 py-3 justify-between">
                    <p>{ratingBadge} {ratingNumber}</p>
                    <p className="flex items-center"><FaEye className="mr-3" /> {total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;