/* eslint-disable react/prop-types */

import toast from "react-hot-toast";

const Modal = ({ setShowModal, showData }) => {

    // Booking function 
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const showName = form.show.value;
        const name = form.name.value;
        const date = form.date.value;
        const time = form.time.value;
        const payment = form.payment.value;

        const bookingInfo = { showName, name, date, time, payment };


        // Get and set info to local storage
        const bookings = [];
        const previousBookingsString = localStorage.getItem('bookings')
        if (previousBookingsString) {
            const previousBookings = JSON.parse(previousBookingsString);
            previousBookings.push(bookingInfo);

            // Set updated bookings to localStorage
            localStorage.setItem("bookings", JSON.stringify(previousBookings));
            
            form.reset();
            toast.success("Show booked")
            // Close
            setShowModal(false)
        }
        else {
            bookings.push(bookingInfo);
            localStorage.setItem("bookings", JSON.stringify(bookings));

            form.reset();
            toast.success("Show booked")
            // Close
            setShowModal(false)
        }


    }


    return (
        <div className="inset-0 fixed h-screen w-screen z-50 flex items-center justify-center backdrop-blur bg-black/40">


            <div className="modal-box w-11/12 max-w-5xl">

                <button onClick={() => setShowModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <form onSubmit={handleBooking}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="">
                            <label htmlFor="name" className="mr-2 font-semibold block">Show Name</label>
                            <input type="text" name="show" value={showData.name} className="px-3 py-2 rounded shadow-md w-full" readOnly />
                        </div>

                        <div className="">
                            <label htmlFor="name" className="mr-2 font-semibold block">Your Name</label>
                            <input type="text" name="name" className="px-3 py-2 rounded shadow-md w-full" />
                        </div>

                        <div className="">
                            <label htmlFor="date" className="mr-2 font-semibold block">Date</label>
                            <input type="date" name="date" className=" px-3 py-2 rounded shadow-md w-full" />
                        </div>
                        <div className="">
                            <label htmlFor="name" className="mr-2 font-semibold block">Time</label>
                            <input type="time" name="time" className="px-3 py-2  rounded shadow-md w-full" />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="payment" className="mr-2 font-semibold block">Payment method</label>
                            <input type="text" name="payment" className="px-3 py-2 rounded shadow-md w-full" />
                        </div>
                    </div>
                    <input className="my-2 bg-yellow-500 px-3 py-2 text-white rounded shadow-md w-full" type="submit" value="Book a ticket" />
                </form>
            </div>

        </div>
    );
};

export default Modal;