
import { useEffect, useState } from 'react'
import axios from 'axios'
import ShowCard from '../../Components/ShowCard/ShowCard';
import { PropagateLoader } from 'react-spinners';


const Home = () => {
    const [show, setShow] = useState([]);

    // fetch all show from API
    useEffect(() => {
        const url = "https://api.tvmaze.com/search/shows?q=all";

        axios.get(url)
            .then(data => setShow(data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='w-11/12 lg:w-9/12 mx-auto my-12'>
            <h2 className="text-center text-4xl font-bold text-slate-300">Explore shows</h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {
                    show.length > 0 ? show.map((item) => <ShowCard key={item.show?.id} item={item} />) : <div className='my-10 w-11/12 lg:w-9/12 mx-auto text-center bg-[#] flex flex-col items-center justify-center'>
                    <PropagateLoader color="#f2853b" />
    
                </div>
                }
            </div>

        </div>
    );
};

export default Home;