/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ShowCard = ({ item }) => {
    console.log(item);

    return (
        <div className="myShadow group bg-gradient-to-br  from-[#171E4A] via-[#41174a] to-[#4a2317] hover:bg-gradient-to-tl  px-3 md:px-6 pt-4 pb-5 text-slate-300">
            <div className="">
                <div className="overflow-hidden mb-2">

                    <img className="w-full group-hover:scale-110 transition-all duration-300" src={item.show?.image?.medium} alt="Show Image" />
                </div>

                {/* Show details */}
                <div className="mb-5">
                    <div className="flex justify-between">
                        <h4 className="text-xl">{item.show?.name}</h4>
                        {item.show?.rating.average && <div className="flex items-center gap-2"><FaStar className="text-yellow-500" /> {item.show?.rating?.average}</div>}
                    </div>

                    {item.show?.language && <p className="text-sm">Language: {item.show?.language}</p>}
                </div>
                <Link to={`/show-details/${item.show.id}`} className="bg-yellow-600 px-3 py-2 text-white rounded ">View Details</Link>
            </div>
        </div>
    );
};

export default ShowCard;