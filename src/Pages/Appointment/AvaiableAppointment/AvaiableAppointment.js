import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvaiableAppointment = ({ selectedDate }) => {

    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(() => {
        fetch('appointmentData.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <h5 className='text-primari'>Available Services on {format(selectedDate, 'PP')}.</h5>
                <p className='text-secondary'>Please select a service.</p>
            </div>

            <div className='row row-cols-1 row-cols-md-3 g-4 mb-5 pb-5'>
                {appointmentOptions.map(option => <AppointmentOption
                    selectedDate={selectedDate}
                    key={option._id}
                    option={option}
                ></AppointmentOption>)}
            </div>


        </div>
    );
};

export default AvaiableAppointment;