import React from 'react';


const Swipe = ({img,name, link}) => {
    return (

            <div className='team__swipe'>
                <img className='team__swipe-img' src={img} alt={name}/>
                <p className='team__swipe-text'>{name}, <span className='team__swipe-orange'>{link}</span></p>
            </div>

    );
};

export default Swipe;