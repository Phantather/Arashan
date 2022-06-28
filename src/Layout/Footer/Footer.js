import React from 'react';
import './footer.css'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import image6 from './image6.png'
import out from './out.png'
import {AiOutlineInstagram} from "react-icons/ai";
import {FiFacebook} from "react-icons/fi";
import {FaTelegramPlane} from "react-icons/fa";
import { BsFillGeoAltFill, BsWhatsapp} from "react-icons/bs";
import {CgMail} from "react-icons/cg";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__row">
                    <div className='footer__col-1 footer__content'>
                        <svg width="168" height="38" viewBox="0 0 168 38" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <g >
                                <path d="M66.6074 14.0003V0.729492H70.3535C71.508 0.729492 72.5289 0.984697 73.416 1.49512C74.3032 2.00553 74.9868 2.73166 75.4668 3.67351C75.9529 4.61534 76.199 5.69694 76.2051 6.91829V7.76595C76.2051 9.01772 75.962 10.1145 75.4759 11.0563C74.9959 11.9982 74.3062 12.7213 73.4069 13.2256C72.5137 13.7299 71.4716 13.9882 70.2806 14.0003H66.6074ZM68.3574 2.16959V12.5694H70.1986C71.5475 12.5694 72.5957 12.1501 73.3431 11.3115C74.0966 10.4729 74.4733 9.27898 74.4733 7.72949V6.95476C74.4733 5.44781 74.1178 4.2781 73.4069 3.44564C72.702 2.60709 71.6994 2.18175 70.3991 2.16959H68.3574ZM83.7246 8.63187H80.6074V14.0003H78.8483V0.729492H83.2416C84.7363 0.729492 85.8848 1.06977 86.6869 1.75033C87.495 2.43088 87.8991 3.42133 87.8991 4.72168C87.8991 5.54807 87.6743 6.26812 87.2246 6.88184C86.7811 7.49555 86.1613 7.95435 85.3652 8.25815L88.4824 13.891V14.0003H86.6048L83.7246 8.63187ZM80.6074 7.20084H83.2962C84.1652 7.20084 84.8548 6.97602 85.3652 6.52636C85.8817 6.07671 86.14 5.47515 86.14 4.72168C86.14 3.90136 85.8939 3.27246 85.4017 2.83496C84.9156 2.39746 84.2108 2.17568 83.2871 2.16959H80.6074V7.20084ZM97.8613 7.86623H92.11V12.5694H98.791V14.0003H90.36V0.729492H98.6999V2.16959H92.11V6.43522H97.8613V7.86623ZM108.298 10.5368H102.738L101.489 14.0003H99.6843L104.752 0.729492H106.283L111.36 14.0003H109.564L108.298 10.5368ZM103.266 9.09667H107.778L105.518 2.88965L103.266 9.09667ZM115.407 0.729492L119.745 11.5576L124.084 0.729492H126.354V14.0003H124.604V8.83238L124.768 3.25423L120.411 14.0003H119.071L114.723 3.28158L114.896 8.83238V14.0003H113.146V0.729492H115.407ZM132.816 7.82975L131.193 9.51597V14.0003H129.443V0.729492H131.193V7.29199L137.09 0.729492H139.205L133.982 6.59017L139.615 14.0003H137.519L132.816 7.82975ZM148.475 10.5368H142.915L141.666 14.0003H139.861L144.929 0.729492H146.46L151.537 14.0003H149.742L148.475 10.5368ZM143.443 9.09667H147.955L145.695 2.88965L143.443 9.09667ZM155.584 0.729492L159.923 11.5576L164.261 0.729492H166.531V14.0003H164.781V8.83238L164.945 3.25423L160.588 14.0003H159.248L154.901 3.28158L155.073 8.83238V14.0003H153.323V0.729492H155.584Z" />
                                <path d="M77.0404 24.1781H72.7748V36.0088H71.0339V24.1781H66.7773V22.738H77.0404V24.1781ZM88.9623 29.8018C88.9623 31.1021 88.7435 32.2384 88.306 33.2106C87.8685 34.1768 87.2488 34.9151 86.4466 35.4255C85.6446 35.9359 84.7088 36.1911 83.6393 36.1911C82.5942 36.1911 81.6676 35.9359 80.8594 35.4255C80.0513 34.909 79.4224 34.1768 78.9727 33.2289C78.5291 32.2749 78.3013 31.172 78.2891 29.9203V28.9632C78.2891 27.6872 78.5109 26.5601 78.9545 25.5818C79.398 24.6034 80.0239 23.856 80.8321 23.3395C81.6463 22.817 82.576 22.5557 83.6211 22.5557C84.6845 22.5557 85.6203 22.814 86.4284 23.3304C87.2426 23.8409 87.8685 24.5852 88.306 25.5635C88.7435 26.5357 88.9623 27.6689 88.9623 28.9632V29.8018ZM87.2214 28.945C87.2214 27.3712 86.9054 26.1651 86.2735 25.3265C85.6415 24.4819 84.7574 24.0596 83.6211 24.0596C82.5152 24.0596 81.6432 24.4819 81.0052 25.3265C80.3733 26.1651 80.0482 27.3318 80.03 28.8265V29.8018C80.03 31.327 80.349 32.527 80.987 33.402C81.6311 34.2709 82.5152 34.7054 83.6393 34.7054C84.7696 34.7054 85.6446 34.2953 86.2643 33.475C86.8841 32.6486 87.2032 31.4667 87.2214 29.9294V28.945ZM100.93 22.738V31.7614C100.924 33.0131 100.529 34.037 99.7449 34.833C98.9671 35.629 97.9098 36.0756 96.5729 36.1728L96.1081 36.1911C94.6559 36.1911 93.4983 35.7992 92.6354 35.0154C91.7726 34.2314 91.3351 33.1529 91.3229 31.7796V22.738H93.0547V31.725C93.0547 32.6851 93.319 33.4324 93.8477 33.9671C94.3763 34.4958 95.1298 34.7601 96.1081 34.7601C97.0985 34.7601 97.8551 34.4958 98.3776 33.9671C98.9062 33.4385 99.1706 32.6942 99.1706 31.7341V22.738H100.93ZM108.559 30.6404H105.441V36.0088H103.682V22.738H108.076C109.57 22.738 110.719 23.0783 111.521 23.7588C112.329 24.4394 112.733 25.4298 112.733 26.7302C112.733 27.5565 112.508 28.2766 112.059 28.8904C111.615 29.504 110.995 29.9628 110.199 30.2666L113.316 35.8995V36.0088H111.439L108.559 30.6404ZM105.441 29.2093H108.13C108.999 29.2093 109.689 28.9845 110.199 28.5348C110.716 28.0852 110.974 27.4837 110.974 26.7302C110.974 25.9098 110.728 25.2809 110.236 24.8434C109.75 24.4059 109.045 24.1842 108.121 24.1781H105.441V29.2093Z" />
                            </g>
                            <g >
                                <path d="M0.607422 31.8498V2.02042C0.607422 0.904576 1.51337 0 2.63091 0H17.5682C19.0724 0 20.0508 1.5806 19.3781 2.92399L4.44077 32.7534C3.48586 34.6603 0.607422 33.9818 0.607422 31.8498ZM50.3852 31.8498V2.02042C50.3852 0.904576 49.4791 0 48.3617 0H33.4244C31.9202 0 30.9418 1.5806 31.6145 2.92399L46.5519 32.7534C47.5066 34.6603 50.3852 33.9818 50.3852 31.8498ZM26.5081 35.1554V5.32596C26.5081 3.19398 29.3865 2.51549 30.3414 4.42243L45.2787 34.2518C45.9513 35.5952 44.9732 37.1758 43.4689 37.1758H28.5315C27.414 37.1758 26.5081 36.2712 26.5081 35.1554ZM24.4846 5.32596V35.1554C24.4846 36.2712 23.5786 37.1758 22.4611 37.1758H7.52378C6.01956 37.1758 5.04121 35.5952 5.71389 34.2518L20.6512 4.42243C21.6061 2.51549 24.4846 3.19398 24.4846 5.32596Z" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_857_21" x1="25.6987" y1="37.1758" x2="25.6987" y2="-4.4317e-06" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.286458" />
                                    <stop offset="1" />
                                </linearGradient>
                                <clipPath id="clip0_857_21">
                                    <rect width="101.111" height="36.5556"  transform="translate(66)"/>
                                </clipPath>
                                <clipPath id="clip1_857_21">
                                    <rect width="49.7778" height="37.1758" />
                                </clipPath>
                            </defs>
                        </svg>

                        <ul className='footer__col-list'>
                            <li className='footer__col-item'>
                                <a className='footer__col-link' href="">Расписание тура</a>
                            </li>
                            <li className='footer__col-item'>
                                <a className='footer__col-link' href="">Стоимость</a>
                            </li>
                            <li className='footer__col-item'>
                                <a className='footer__col-link' href="">Как записаться</a>
                            </li>
                            <li className='footer__col-item'>
                                <a className='footer__col-link' href="">Команда</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__col-2 footer__content'>
                        <div className='footer__sub'>
                            <p className='footer__ins'>@dreamkamtour</p>
                            <button className='footer__btn' type='button'>Подписаться</button>
                        </div>
                        <div className='footer__col-cont'>
                            <img className='footer__col-img' src={image1} alt=""/>
                            <img className='footer__col-img' src={image2} alt=""/>
                            <img className='footer__col-img' src={image3} alt=""/>
                            <img className='footer__col-img' src={image4} alt=""/>
                            <img className='footer__col-img' src={image5} alt=""/>
                            <img className='footer__col-img' src={image6} alt=""/>
                        </div>
                    </div>
                    <div className='footer__col-3 footer__content'>
                        <div className='footer__out'>
                            <img className='footer__out-img' src={out} alt=""/>
                            <div className='footer__out-text'>
                                <h3 className='footer__out-title'>Смотрите видео отзывы <br/>
                                    наших клиентов</h3>
                                <a className='footer__out-link' href="">Перейти в Instagram</a>
                            </div>
                        </div>
                            <div className='footer__soc'>
                                <h3 className='footer__out-title'>Социальные сети</h3>
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
                    </div>
                    <div className='footer__col-4 footer__content'>
                        <a className='footer__tel' href="tel:+ 7 (760) 354-23-23">+ 7 (760) 354-23-23</a>
                        <p className='footer__time'>Работаем с 9:00 до 18:00</p>
                        <p className='footer__email'>  <CgMail/> info@dreamkamtour.ru</p>
                        <address className='footer__address'> <BsFillGeoAltFill/> ул. Рубиннштерна, 41</address>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;