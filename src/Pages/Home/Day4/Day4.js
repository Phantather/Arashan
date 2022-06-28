import React from 'react';
import './day4.css'
import birds from './birds.png'
import SwiperRight from "../SwiperRight/SwiperRight";
import card1 from './card2.png'
import card2 from './card2.png'



const Day4 = () => {
    return (
        <section className='day4'>
            <div className="container">
                <div className='day4__content'>
                    <div className='day4__info'>
                        <h2 className='day4__title'> <span className='day3__title-span'>День 4.</span> Алтын-Арашан</h2>

                        <ul className='day4__list'>
                            <li className='day4__item'>
                                asdsadУтром после завтрака собираемся в <br/>
                                поход на водопад, источники под названием «Гнездо» <br/>
                                они в форме сердца, и прогулка на лошади  по лесу.

                            </li>
                            <li className='day4__item'>
                                Вы можете сделать прекрасные фотографии, <br/>
                                и подышать свежим воздухом Алтын-Арашана.
                            </li>
                            <li className='day4__item'>
                                Питание: трех разовое
                            </li>
                        </ul>


                    </div>
                </div>
                <img src={birds} alt="birds kamchatka" className='day4__birds'/>


            </div>
            <div className='day4__carousel'>
                <SwiperRight card1={card1} card2={card2}/>
            </div>
        </section>
    );
};

export default Day4;