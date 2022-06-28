import React from 'react';
import './day2.css'
import clouds from "./clouds.png";
import lake from './lake.jpg'
import card1 from './burana.jpeg'
import card2 from './burana2.jpeg'
import card3 from './lake2.jpeg'
import SwiperLeft1 from "../SwiperLeft1/SwiperLeft1";

const Day2 = () => {
    return (
        <section className='day2'>
            <img src={clouds} alt="clouds" className='day2__clouds'/>
            <div className="container">
                <h2 className='day2__title'>
                    <span className='day2__title-span'>День 2. </span>
                    Бишкек – Чолпон-Ата <br/>
                    (Иссык-куль)
                </h2>

                <p className='day2__text day2__text_first'>
                    Выезд после завтрака из Бишкека .
                </p>
                <p className='day2__text day2__text_sec'>
                    По дороге заезд в башню Бурана. Башня Бурана—минарет <br/>
                    IX—XI веков государства Караханидов в Чуйской долине <br/>
                    на севере Киргизии. Расположена в 80 км от столицы Бишкека.
                </p>

                <div className='day2__content'>

                    <ul className='day2__list'>
                        <li className='day2__item'>
                            По приезду на Иссык-Куль мы посетим музей <br/>
                            в Чолпон – Ате под названием «Рух –ордо»
                          </li>
                        <li className='day2__item'>Рух – Ордо - это единственный в своем роде музей <br/>
                            под открытым небом на побережье озера Иссык-Куль. <br/>Комплекс включает в себя 10 мини музеев, в том числе:  <br/>«Дом-музей Ч.Айтматова»,
                            «Зал кыргызского искусства и культуры», <br/> картинную и фото галереи…</li>
                        <li className='day2__item'>По приезду  в гостевой дом, у вас будет свободное время <br/> прогуляться по берегу. <br/>
                            Питание:ужин/завтрак</li>
                    </ul>
                </div>
            </div>
            <div className='day2__carousel'>
                <SwiperLeft1 card1={card1} card2={card2} card3={card3}/>
            </div>
            <img className='day2__lake' src={lake} alt=""/>
        </section>
    );
};

export default Day2;