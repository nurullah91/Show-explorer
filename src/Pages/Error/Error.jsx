import Lottie from "lottie-react";
import animation from "../../assets/animation.json";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const routerError = useRouteError();
    console.log(routerError);
    return (
        <div className="min-h-screen flex flex-col items-center w-11/12 lg:w-9/12 mx-auto py-8">
            <Lottie className="w-1/2" animationData={animation} loop={true} />

            <h3 className="text-center text-8xl font-bold text-yellow-600">
                {
                    routerError?.status
                }
            </h3>

            <h3 className="text-center text-xl font-bold text-yellow-600">
                {
                    routerError?.error?.message
                }
            </h3>
            <Link className="my-4 px-4 py-2 bg-yellow-600 font-semibold rounded-md text-white" to='/'>Home</Link>
        </div>
    );
};

export default Error;