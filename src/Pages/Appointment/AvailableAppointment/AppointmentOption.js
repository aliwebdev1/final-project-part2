import React, { useState } from 'react';

const AppointmentOption = ({ option, handleBookingOpen,setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="col">
            <div class="service rounded p-3">
                <div class="card-body primari">
                    <h2 class="card-title my-3">{name}</h2>
                    <p class="text-black card-text my-3">{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                    <button onClick={handleBookingOpen} className='btn btn-primari mb-3'>Make Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;