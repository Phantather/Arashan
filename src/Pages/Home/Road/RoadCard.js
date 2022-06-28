import React from 'react';
import './road.css'

const RoadCard = ({img, title, text}) => {
    return (
        <div className='road__card'>
            <img className='road__card-img' src={img} alt={title}/>
            <div className='road__card-info'>
                <h3 className='road__card-title'>{title}</h3>
                <p className='road__card-text'>{text}</p>
            </div>
        </div>
    );
};

export default RoadCard;