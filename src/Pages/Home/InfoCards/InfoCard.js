import React from 'react';

const InfoCard = ({ card }) => {
    const { name, des, icon, bgClass } = card
    return (
        <div className="col">
            <div class={`${bgClass} p-4 rounded d-flex`}>
                <img src={icon} alt="..." />
                <div class="card-body ms-3 text-white">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{des}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;