import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvaiableAppointment from '../AvaiableAppointment/AvaiableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvaiableAppointment
                selectedDate={selectedDate}
            ></AvaiableAppointment>
        </div>
    );
};

export default Appointment;