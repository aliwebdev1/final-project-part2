import React from 'react';

const InfoCard = ({ card }) => {
    const { name, des, icon, bgClass } = card
    return (
        <div className="col">
            <div className={`${bgClass} p-4 rounded d-flex`}>
                <img src={icon} alt="..." />
                <div className="card-body ms-3 text-white">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{des}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;