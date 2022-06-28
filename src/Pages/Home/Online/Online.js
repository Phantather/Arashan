import React, {useState} from 'react';
import './online.css'
import {AiOutlineInstagram} from "react-icons/ai";
import {FiFacebook} from "react-icons/fi";
import { FaTelegramPlane} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs";
import bg from './bg.png'
import mag from './mag.png'

const Online = () => {

    const [count, setCount] = useState(1)

    return (
        <section className='online'>
            <div className="container">
                <div className='online__content'>
                    <div className='online__left'>
                        <h2 className='online__title'>Онлайн-заявка</h2>
                        <ul className='online__list'>
                            <li className='online__item'>
                                <a className='online__link' href="">
                                    <AiOutlineInstagram/>
                                </a>
                            </li>
                            <li className='online__item'>
                                <a className='online__link' href="">
                                    <FiFacebook/>
                                </a>
                            </li>
                            <li className='online__item'>
                                <a className='online__link' href="">
                                    <FaTelegramPlane/>
                                </a>
                            </li>
                            <li className='online__item'>
                                <a className='online__link' href="">
                                    <BsWhatsapp/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form className='online__form'>
                        <div className='online__form-top'>
                                <label className='online__form-tops'>
                                    <span className='online__form-text'>Имя участника</span>
                                    <input className='online__form-input' placeholder='Имя' type="text"/>
                                </label>
                                 <label className='online__form-tops'>
                                    <span className='online__form-text'>Количество человек</span>
                                    <input min={1} value={count} onChange={(e) => setCount(e.target.value)} className='online__form-input online__form-input-num' type="number"/>

                                     <div className='online__form-icons'>
                                         <span className='icons-minus' onClick={() => {
                                             if (count > 1){
                                                 setCount(count - 1)
                                             }
                                         }}/>
                                         <span className='icons-plus'  onClick={() => {
                                             if (count < 10){
                                                 setCount( count + 1)
                                             }
                                         }}/>
                                     </div>
                                </label>
                        </div>
                        <p className='online__form-text'>Тариф</p>
                        <ul className='online__form-list'>
                            <li className='online__form-item'>
                                <label className='online__form-radio'>
                                    <input name='tarif' className='online__form-radio-circle' type="radio"/>
                                    <span className='online__form-radio-text'>Базовый (для камчадал)</span>
                                </label>
                                <p className='online__form-price'>79 000 руб</p>
                            </li>
                            <li className='online__form-item'>
                                <label className='online__form-radio'>
                                    <input name='tarif' checked={true} className='online__form-radio-circle' type="radio"/>
                                    <span className='online__form-radio-text'>Базовый + проживание</span>
                                </label>
                                <p className='online__form-price'>99 000 руб</p>
                            </li>
                            <li className='online__form-item'>
                                <label className='online__form-radio'>
                                    <input name='tarif' className='online__form-radio-circle' type="radio"/>
                                    <span className='online__form-radio-text'>Базовый + проживание + долина гейзеров</span>
                                </label>
                                <p className='online__form-price'>179 000 руб</p>
                            </li>
                        </ul>
                        <label className='online__form-tops'>
                            <span className='online__form-text'>Даты тура</span>
                            <input className='online__form-date' type="date"/>
                        </label>
                        <label className='online__form-textarea'>
                            <span className='online__form-text'>Комментарий</span>
                            <textarea placeholder='Напишите ваш комментарий здесь' className='online__form-input' name="" />
                        </label>
                        <button type='submit' className='online__form-btn'>Отправить заявку</button>
                    </form>
                </div>
                <div className='online__bot'>
                    <img className='online__bot-img' src={mag} alt=""/>
                    <div className='online__bot-right'>
                        <h3 className='online__bot-title'>Что нужно знать отправляясь на Камчатку?</h3>
                        <p className='online__bot-subtitle'>Получите памятку туриста просто оставив свой e-mail.</p>
                        <form action="" className='online__bot-form'>
                            <input placeholder='Ваш e-mail' className='online__bot-input' type="email"/>
                            <button className='online__bot-btn' type='submit'>Получить</button>
                        </form>
                    </div>
                </div>
            </div>
            <img src={bg} alt='bg' className='online__bg'/>
        </section>
    );
};

export default Online;