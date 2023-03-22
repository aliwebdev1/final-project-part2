import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, des, image } = service;
    return (
        <div className="col">
            <div className="service mt-5 rounded p-3">
                <img className='service-image' src={image} alt="..." />
                <div className="card-body">
                    <h2 className="card-title my-3">{name}</h2>
                    <p className="card-text my-3">{des}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;