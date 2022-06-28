import React from 'react';
import clouds from "./clouds.png";
import './day7.css'
import SwiperLeft1 from "../SwiperLeft1/SwiperLeft1";
import card1 from './card1.png'
import card2 from './card2.png'

const Day7 = () => {
    return (
        <section className='day7'>
            <img src={clouds} alt="clouds" className='day7__clouds'/>
            <div className="container">
                <h2 className='day7__title'>
                    <span className='day7__title-span'>День 6.</span>
                    Каракол - Жети Огуз
                </h2>

                <p className='day7__text day7__text_first'>
                    После завтрака переезд  в ущель Боорскон.
                </p>
                <p className='day7__text day7__text_first'>
                    Ущелье Барскоон — это одно из красивейших ущелий <br/> на южном берегу Иссык-Куля,
                    знаменитое своими <br/> высокими водопадами и густыми еловыми лесами. <br/>
                    Здесь же в свое время бывал первый человек, <br/> полетевший в космос — Юрий Гагарин.
                </p>
                <p className='day7__text day7__text_sec'>
                    Коньен «Сказка» знаменитое своими красными глиняными <br/>
                    скалами и не повторимым пейзажом .
                </p>

                <div className='day7__content'>


                    <div className='day7__content-right'>
                        <p className='day7__content-title'>
                            Начевка в юртах <br/>
                            Питание: трех разовое</p>
                        <h3 className='day7__dop'>Дополнительные услуги</h3>
                        <div className='day7__dop-item'>
                            <h4 className='day7__dop-title'>Роуп Джамп</h4>
                            <p className='day7__dop-text'>Прыжки с высоты над водопадом. <br/> Записываться заранее. </p>
                        </div>
                        <div className='day7__dop-item'>
                            <h4 className='day7__dop-title'>Ледянки</h4>
                            <p className='day7__dop-text'>Прыжки с высоты над водопадом. <br/> Записываться заранее. </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='day7__carousel'>
                <SwiperLeft1 card1={card1} card2={card2}/>
            </div>
        </section>
    );
};

export default Day7;