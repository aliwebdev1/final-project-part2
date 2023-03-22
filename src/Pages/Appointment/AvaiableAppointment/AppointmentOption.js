import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentOption = ({ option, selectedDate }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleBookingOpen = () => setShow(true);
    const { name, slots } = option;
    return (
        <>
            <div className="col">
                <div className="service mt-5 rounded p-3">
                    <div className="card-body">
                        <h3 className="text-primari my-3">{name}</h3>
                        <p className="card-text my-3">{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                        <button onClick={handleBookingOpen} className='btn btn-primari'>Make Appointment</button>
                    </div>
                </div>
            </div>

            <BookingModal
                selectedDate={selectedDate}
                show={show}
                handleClose={handleClose}
                option={option}
            ></BookingModal>

        </>
    );
};

export default AppointmentOption;