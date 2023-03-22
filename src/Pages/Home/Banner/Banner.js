import React from 'react';
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className='my-5 py-5'>
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-gray pe-md-5">
                    <h1>Your New Smile Starts Here</h1>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio aspernatur cupiditate doloribus possimus inventore quos optio blanditiis velit ipsa!</p>
                    <button className='btn btn-primari'>Get Started</button>
                </div>
                <div className="col-12 col-md-6">
                    <img className='img-fluid' src={chair} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;