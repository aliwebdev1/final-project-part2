import React from 'react';

const Review = ({ review }) => {
    const { name, image, location, reviewText } = review;
    return (
        <div className="col">
            <div className="service mt-5 rounded p-3">
                <div className="card-body">
                    <p className="card-text my-3 text-start">{reviewText}</p>
                </div>
                <div className='d-flex align-items-center mt-3'>
                    <img className='border rounded-circle border-success' src={image} alt="" />
                    <div className='text-start ms-3 '>
                        <h6>{name}</h6>
                        <p>{location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;