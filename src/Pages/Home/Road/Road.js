import React from 'react';
import audio from './audio.png'
import meal from './meal.png'
import save from './save.png'
import photo from'./photo.png'

import './road.css'
import RoadCard from "./RoadCard";

const Road = () => {
    return (
        <section className='road'>
            <div className="container">
                <h2 className='road__title'>На протяжении маршрута вас ожидает:</h2>
                <div className="road__row">
                    <RoadCard img={audio} title='Аудиосопровождение' text='Новый способ увидеть и услышать, то место, где вы находитесь. С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу.'/>
                    <RoadCard img={meal} title='Разнообразное питание' text='Каждый обед мы готовим с большой любовью. Кормим вас традиционными камчатскими блюдами. Еда - залог хорошего отдыха!'/>
                    <RoadCard img={save} title='Безопасность на маршруте' text='Наша команда проводит инструктаж, рассказывает как правильно себя вести, как избежать опасных ситуаций.'/>
                    <RoadCard img={photo} title='Потрясающие фото' text='Можете не переживать, что не успели сделать фото. Наш фотограф успевает везде и за всеми. У вас будут самые лучшие фото!'/>
                </div>
            </div>
        </section>
    );
};

export default Road;