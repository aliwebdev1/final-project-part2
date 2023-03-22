import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleBookingOpen = () => setShow(true);

    const [appoinmentOptions, setAppoinmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appoinmentData.json')
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))
    }, [])
    return (
        <section className='mb-5'>
            <div className=' text-center mb-5'>
                <h5 className='primari'>Available Services on {format(selectedDate, 'PP')}</h5>
                <p className='text-secondary'>Please select a service.</p>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 pb-5'>
                {appoinmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    option={option}
                    handleBookingOpen={handleBookingOpen}
                    setTreatment={setTreatment}
                ></AppointmentOption>)}
            </div>
            <BookingModal
                show={show}
                handleClose={handleClose}
            ></BookingModal>
        </section>
    );
};

export default AvailableAppointment;