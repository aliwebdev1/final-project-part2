import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            des: "Open at 10.00 am to 6.00 pm",
            icon: clock,
            bgClass: 'bg-primari'
        },
        {
            id: 2,
            name: 'Visit Our location',
            des: "Open at 10.00 am to 6.00 pm",
            icon: marker,
            bgClass: 'bg-secondary'
        },
        {
            id: 3,
            name: 'Contact us',
            des: "Open at 10.00 am to 6.00 pm",
            icon: phone,
            bgClass: 'bg-primari'
        },
    ]
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            {cardData.map(card => <InfoCard
                key={card.id}
                card={card}
            ></InfoCard>)}
        </div>
    );
};

export default InfoCards;