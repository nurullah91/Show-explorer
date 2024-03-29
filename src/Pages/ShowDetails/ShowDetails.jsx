import axios from "axios";
import DOMPurify from 'dompurify';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import Modal from "../../Components/Modal/Modal";
import { Toaster } from "react-hot-toast";

const ShowDetails = () => {
    const { id } = useParams();
    const [showData, setShowData] = useState({});
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        const url = `https://api.tvmaze.com/shows/${id}`;

        axios.get(url)
            .then(data => setShowData(data.data))
            .catch(err => console.log(err))
    }, [id])
    const { name, runtime, premiered, language, summary, image, genres } = showData;

    // sanitize data for safely render HTML
    const sanitizedSummery = DOMPurify.sanitize(summary);




    return (
        name ? <section className="w-11/12 md:w-9/12 mx-auto my-10 myShadow">
            {/* Toaster */}
            <Toaster/>
            {/* Modal */}
            {showModal && <Modal setShowModal={setShowModal} showData={showData}/>}

            {/* Card */}
            <div className="px-5 md:px-10 py-10">

                <div className="lg:flex">
                    {/* Show info */}
                    <div className="lg:w-1/2">
                        {/*Section Header */}
                        <div className="flex gap-5">
                            {image?.medium && <img className="w-[100px]" src={image.medium} alt="image" />}
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-100">{name}</h3>
                                {premiered && <p className="text-yellow-400">Premiered: {premiered}</p>}

                                {language && <p className="text-slate-400">Language: {language}</p>}

                                <div>
                                    {runtime && <button className="border border-slate-400 rounded px-4 py-1 mr-4 my-3 text-white">{runtime} min</button>}
                                    {genres.map((item, index) => <span key={index} className="mr-3 text-green-300 border-r-2 border-green-800 px-2">{item}</span>)}
                                </div>
                            </div>
                        </div>

                        {summary && <div className="text-slate-300 mt-5 ">
                            <p dangerouslySetInnerHTML={{ __html: sanitizedSummery }} />
                        </div>}
                        <button onClick={() => setShowModal(true)} className="mb-8 mt-2 bg-yellow-600 px-3 py-2 text-white rounded ">Book a ticket</button>

                        {/* 
                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                    </div>

                    {/* Show image */}
                    <div className="lg:w-1/3 mx-auto">
                        {image?.original && <img src={image.original} className="w-full opacity-80 hover:scale-105 transition-all duration-500" alt="image" />}
                    </div>
                </div>


            </div>


        </section> :
            <div className='my-10 w-11/12 lg:w-9/12 mx-auto text-center bg-[#] flex flex-col items-center justify-center'>
                <PropagateLoader color="#f2853b" />

            </div>

    );
};

export default ShowDetails;