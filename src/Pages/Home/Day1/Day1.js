import React from 'react';
import './day1.css'
import SwiperRight from "../SwiperRight/SwiperRight";
import card1 from './ala4.jpg'
import card2 from './alaarcha.jpeg'
import card3 from './air.jpeg'


const Day1 = () => {
    return (
        <section className='day1'>

            <div className="container">
                <h2 className='day1__title'> <span className='day1__title-span'>День 1.</span> Прибытие. <br/> Встреча туристов, <br/>
                    Бишкек(аэропорт Манас)
                </h2>

                <ul className='day1__list'>
                    <li className='day1__item'>
                        Прибытие в аэропорт. Переезд в город
                        Бишкек. <br/> Размещение в гостинице. После небольшого <br/> отдыха, <span className='day1__item-span'>ознакомительная экскурсия</span> по городу
                    </li>
                    <li className='day1__item'>
                        <span className='day1__item-span'>Поездка в ущелье Ала-Арча. </span> <br/>
                        Государственный природный парк Алa-Арча — парк <br/>
                        расположенный на расстоянии 41 км от её столицы, <br/>
                        на северном склоне Кыргызского хребта, на высоте 1600—4860м


                    </li>
                    <li className='day1__item'>
                        Приезд в город, заселение в отеле <br/>
                        Питание: завтрак/ужин
                    </li>

                </ul>

            </div>

            <div className='day1__carousel'>
                <SwiperRight card1={card3} card2={card2} card3={card1}/>
            </div>

        </section>
    );
};

export default Day1;