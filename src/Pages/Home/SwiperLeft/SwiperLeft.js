import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import img from "../FirstScreen/whiteblock.png";
import './swiperLeft.css'

const SwiperLeft = ({card1, card2}) => {
    return (
        <Swiper
            dir="rtl"
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper swiper-left"
        >
            <SwiperSlide>
                <img className='swiper__img' src={card1} alt="card1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className='swiper__img' src={card2} alt="card2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className='swiper__img' src={card1} alt="card1"/>
            </SwiperSlide>

        </Swiper>
    );
};

export default SwiperLeft;