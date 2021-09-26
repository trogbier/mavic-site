import React from 'react';
import ScrollBtn from "./ScrollBtn";
import mavic from '../images/mavic.png'

const SectionSpecification = () => {
    return (
        <section className="page-section specification">
            <div className="page-section_wrapper top_wrapper">
            <div className="container">
                <h3 className="title">Характеристики</h3>
                <div className="specification_inner">
                    <div className="specification_item">
                        <div className="specification_box">
                            <h4 className="specification_box-title">Dlog-M 10 бит</h4>
                            <p className="specification_box-text">Mavic 2 Pro поддерживает цветовой профиль Dlog-M 10
                                бит с более широким
                                динамическим диапазоном, дающим больше возможностей для цветокоррекции.
                            </p>
                        </div>
                        <div className="specification_box">
                            <h4 className="specification_box-title">Камера Hasselblad</h4>
                            <p className="specification_box-text">Камера Hasselblad L1D-20С
                                известны эргономичным дизайном и превосходным качеством изображений.
                            </p>
                        </div>
                    </div>

                    <div className="specification_item">
                        <img src={mavic} alt=""/>
                    </div>

                    <div className="specification_item">
                        <div className="specification_box">
                            <h4 className="specification_box-title">Матрица CMOS 1</h4>
                            <p className="specification_box-text">Зона активной работы новой 1-дюймовой матрицы CMOS в
                                четыре раза превышает
                                показатели Mavic Pro
                            </p>
                        </div>
                        <div className="specification_box">
                            <h4 className="specification_box-title">Видео HDR</h4>
                            <p className="specification_box-text">Благодаря поддержке видео 4K HDR 10 бит, Mavic 2 Pro
                                можно подсоединить к
                                совместимому с HLG 4K ТВ и просматривать запись в полном цветовом спектре
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollBtn/>
            </div>
        </section>
);
};

export default SectionSpecification;