import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa"
import {BsTelegram, BsWhatsapp} from "react-icons/bs";
import img from './whiteblock.png'
import './firstScreen.css'
import "swiper/css";
import card1 from './card1.png'
import card2 from './card2.png'
import SwiperRight from "../SwiperRight/SwiperRight";
import Video from './video.mp4'

const FirstScreen = () => {
    return (
        <section className='firstScreen'>
            <video className='firstScreen__video' src={Video} autoPlay loop muted />
            <img src={img} alt="oblako" className='firstScreen__img'/>
            <div className="container">

                <h2 className='firstScreen__title'>Мечты о горном <br/>
                    Кыргызстан - реально</h2>
                <div className='firstScreen__time'>
                    23.06 - 04.07  DREAM TOUR
                </div>
                <div className='firstScreen__content'>
                    <p className='firstScreen__text'>Тур перевернет ваш мир с ног на голову <br/> и оставит впечатления на всю жизнь. </p>
                    <div className='firstScreen__flex'>
                        <div className='firstScreen__tour'>
                            <a href="#" className='firstScreen__link'>Расписание тура</a>
                            <div className='firstScreen__circle'>
                                <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g >
                                        <path d="M24.7744 9.19027C24.774 9.19027 24.7736 9.19021 24.7731 9.19024L17.8622 9.2208C17.3445 9.2231 16.9265 9.64462 16.9288 10.1624C16.9311 10.6802 17.3526 11.0981 17.8704 11.0958L22.5103 11.0753L8.49942 25.1425C8.13403 25.5093 8.13521 26.1029 8.50207 26.4683C8.86893 26.8337 9.4625 26.8325 9.8279 26.4656L23.8388 12.3985L23.8369 17.0384C23.8367 17.5562 24.2563 17.976 24.774 17.9762C25.2919 17.9765 25.7117 17.5568 25.7119 17.0391L25.7148 10.1281C25.7148 10.1277 25.7147 10.1273 25.7148 10.1268C25.7142 9.60808 25.2915 9.18867 24.7744 9.19027Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_469_7">
                                            <rect width="24" height="24" fill="white" transform="translate(0 18) rotate(-45.1148)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className='firstScreen__social'>
                            <a href="" className='firstScreen__social-icon'>
                                <FaFacebookF/>
                            </a>
                            <a href="" className='firstScreen__social-icon'>
                                <AiOutlineInstagram/>
                            </a>
                            <a href="" className='firstScreen__social-icon'>
                                <BsTelegram/>
                            </a>
                            <a href="" className='firstScreen__social-icon'>
                                <BsWhatsapp/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='firstScreen__carousel'>
                <SwiperRight card1={card1} card2={card2} card3={card2}/>
            </div>
        </section>
    );
};

export default FirstScreen;