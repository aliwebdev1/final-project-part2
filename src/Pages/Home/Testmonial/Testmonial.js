import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';
import quote from '../../../assets/icons/quote.svg'
import './Testmonial.css'

const Testmonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            image: people1,
            reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2,
            name: 'Winson Herry',
            image: people2,
            reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3,
            name: 'Winson Herry',
            image: people3,
            reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },

    ]
    return (
        <div className='my-5 py-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h4 className='text-primari'>Testmonial</h4>
                    <h2 className='text-secondary'>What Our Patients Says</h2>
                </div>
                <div className=''>
                    <img className='quote-image' src={quote} alt="" />
                </div>
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)}
            </div>

        </div>
    );
};

export default Testmonial;