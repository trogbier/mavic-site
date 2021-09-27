import React from 'react';
import ScrollBtn from "./ScrollBtn";

const SectionQuestion = () => {
    return (
        <section className="page-section question" id='question'>
            <div className="page-section_wrapper top_wrapper">

                <div className="container">
                    <h3 className="title">Остались вопросы?</h3>
                    <div className="question_items">
                        <div className="question_item">
                            <h4 className="question_item-title">Какие отличия между Mavic 2 Pro и Mavic 2 Zoom?</h4>
                            <p className="question_item-text">В Mavic 2 улучшены практически все аспекты: камера,
                                передача
                                видеосигнала,
                                полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                                направлениях,
                                интеллектуальные
                                функции и уникальная функция Hyperlapse (гиперлапс).
                            </p>
                        </div>
                        <div className="question_item">
                            <h4 className="question_item-title">Чем Mavic 2 лучше Mavic Pro? </h4>
                            <p className="question_item-text">В Mavic 2 улучшены практически все аспекты: камера,
                                передача
                                видеосигнала,
                                полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                                направлениях,
                                интеллектуальные
                                функции и уникальная функция Hyperlapse (гиперлапс).
                            </p>
                        </div>
                        <div className="question_item">
                            <h4 className="question_item-title">Можно ли подключить Mavic 2 к очкам DJI Goggles?</h4>
                            <p className="question_item-text">В Mavic 2 улучшены практически все аспекты: камера,
                                передача
                                видеосигнала,
                                полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                                направлениях,
                                интеллектуальные
                                функции и уникальная функция Hyperlapse (гиперлапс).
                            </p>
                        </div>
                        <div className="question_item">
                            <h4 className="question_item-title">Является ли Mavic 2 водонепроницаемым?</h4>
                            <p className="question_item-text">В Mavic 2 улучшены практически все аспекты: камера,
                                передача
                                видеосигнала,
                                полётное время, скорость, уровень шума, обнаружение препятствий в нескольких
                                направлениях,
                                интеллектуальные
                                функции и уникальная функция Hyperlapse (гиперлапс).
                            </p>
                        </div>
                    </div>
                </div>
                <ScrollBtn nextLink={'contacts'}/>
            </div>
        </section>

    );
};

export default SectionQuestion;