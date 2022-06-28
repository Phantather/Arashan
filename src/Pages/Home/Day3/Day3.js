import React from 'react';
import './day3.css'
import bg from './bg.png'
import SwiperLeft from "../SwiperLeft/SwiperLeft";
import card1 from './card1.png'
import card2 from './card2.png'

const Day3 = () => {
    return (
        <section className='day3'>
            <div className="container">
                <div className='day3__content'>

                    <div className='day3__info'>
                        <h2 className='day3__title'> <span className='day3__title-span'>День 3.</span> Чолпон-Ата – <br/>Алтын-Арашан</h2>

                        <ul className='day3__list'>
                            <li className='day3__item'>
                                После завтрака переезд в Алтын-Арашан, <br/>
                                примерный приезд  после обеда  около 14:00 дня.
                               </li>
                            <li className='day3__item'>
                                Вас будет ожидать вкуссный обед.
                            </li>
                            <li className='day3__item'>
                                Позже прием горячих  источников и приятный отдых вечером у костра.
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
            <img src={bg} alt="day3 bg" className='day3__bg'/>
            <div className='day3__carousel'>
                <SwiperLeft card1={card1} card2={card2}/>
            </div>
        </section>
    );
};

export default Day3;