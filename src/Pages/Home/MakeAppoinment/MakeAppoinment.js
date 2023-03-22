import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appinBackground from '../../../assets/images/appointment.png'
import './MakeAppoinment.css'

const MakeAppoinment = () => {
    return (
        <div className="my-5">
            <div style={{ background: `url(${appinBackground})` }} className="row align-items-center ">
                <div className="col-12 col-md-6 ">
                    <img className='img-fluid doctor-image d-none d-md-block' src={doctor} alt="" />
                </div>
                <div className="col-12 col-md-6 text-white p-5 p-md-0">
                    <div className='text-start'>
                        <h4 className='primari'>Appoinment</h4>
                        <h2 className=''>Make an Appoinment Today</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='btn btn-primari'>Get started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MakeAppoinment;