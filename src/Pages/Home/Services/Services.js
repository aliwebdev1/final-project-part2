import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam magnam molestiae assumenda iste tenetur sed error fuga id incidunt possimus!",
            image: fluoride,
        },
        {
            id: 2,
            name: 'Teeth Whitening',
            des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam magnam molestiae assumenda iste tenetur sed error fuga id incidunt possimus!",
            image: cavity,
        },
        {
            id: 3,
            name: 'Cavity Filling',
            des: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam magnam molestiae assumenda iste tenetur sed error fuga id incidunt possimus!",
            image: whitening,
        },
    ]
    return (
        <div className='my-5 py-5'>
            <div className='text-center'>
                <h4 className='text-primari'>OUR SERVICES</h4>
                <h2 className='text-secondary'>Services We Provide</h2>
            </div>

            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {serviceData.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </div>

        </div>
    );
};

export default Services;