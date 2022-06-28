import React from 'react';
import './day5.css'
import SwiperRight from "../SwiperRight/SwiperRight";
import card1 from './card1.jpeg'
import card2 from './card2.png'
import SwiperLeft from "../SwiperLeft/SwiperLeft";

const Day5 = () => {
    return (
        <section className='day5'>
            <div className="day5__top">
                <div className="container">
                    <div className='day5__content'>

                        <div className='day5__info day5__info_1'>
                            <h2 className='day5__title'> <span className='day3__title-span'>День 4. </span>Алтын-Арашан </h2>

                            <ul className='day5__list'>
                                <li className='day5__item'>
                                    Утром после завтрака собираемся в <br/>
                                    поход на водопад, источники под названием «Гнездо» <br/>
                                    они в форме сердца, и прогулка на лошади  по лесу.
                                </li>
                                <li className='day5__item'>
                                    Вы можете сделать прекрасные фотографии, <br/>
                                    и подышать свежим воздухом Алтын-Арашана.
                                </li>
                                <li className='day5__item'>
                                    Питание: трех разовое
                                </li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='day5__content'>
                    <div className='day5__info'>
                        <h2 className='day5__title day5__title_2'> <span className='day3__title-span'>День 5. </span>
                            Алтын-Арашан - КАРАКОЛ</h2>

                        <ul className='day5__list'>
                            <li className='day5__item'>
                                Приезд после обеда в город <br/>
                                Посещение Дунганской мечети
                            </li>
                            <li className='day5__item'>
                                Скай парадайс,подъем  на канатке , <br/>
                                вид города с панорамы
                            </li>
                            <li className='day5__item'>
                                Ночевка в гостевом доме
                            </li>
                            <li className='day5__item'>
                                Питание: ужин/ завтрак
                            </li>

                        </ul>

                        <h3 className='day5__dop'>Дополнительные услуги</h3>
                        <div className='day5__dop-item'>
                            <h4 className='day5__dop-title'>Серфинг</h4>
                            <p className='day5__dop-text'>Прыжки с высоты над водопадом. <br/> Записываться заранее. </p>
                        </div>
                        <div className='day5__dop-item'>
                            <h4 className='day5__dop-title'>SUP борды</h4>
                            <p className='day5__dop-text'>Прыжки с высоты над водопадом. <br/> Записываться заранее. </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="day6__carousel">
                <SwiperRight card1={card1} card2={card2}/>
            </div>
            <div className='day5__carousel'>
                <SwiperLeft card1={card1} card2={card2}/>
            </div>
        </section>
    );
};

export default Day5;