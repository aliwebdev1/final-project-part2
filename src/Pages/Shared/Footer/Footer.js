import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className="row">
                <div className="col-12 col-md-4">
                    <h4 className='text-secondary'> Service</h4>
                    <h6>Footer items</h6>
                    <h6>Footer items</h6>
                    <h6>Footer items</h6>
                    <h6>Footer items</h6>
                </div>
                <div className="col-12 col-md-4">
                    <h4 className='text-secondary'>Oral Health</h4>
                    <h6>Footer items</h6>
                    <h6>Footer items</h6>
                    <h6>Footer items</h6>
                    <h6>Footer items</h6>
                </div>
                <div className="col-12 col-md-4">
                    <h4 className='text-secondary'>Address</h4>
                    <p>1219, Banglabazar</p>
                </div>
            </div>
            <p className='my-5 text-center'>Copywrite form 2022 prowerd by web development</p>
        </div>
    );
};

export default Footer;