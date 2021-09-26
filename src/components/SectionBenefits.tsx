import React from 'react';
import benefits1 from '../images/benefits-1.jpg'
import benefits2 from '../images/benefits-2.jpg'
import benefits3 from '../images/benefits-3.jpg'
import benefits4 from '../images/benefits-4.jpg'
import ScrollBtn from "./ScrollBtn";

const SectionBenefits = () => {
    return (
        <section className="page-section benefits">
            <div className="page-section_wrapper top_wrapper">
                <div className="container">
                    <h3 className="title">Преимущества</h3>
                    <div className="benefits_items">
                        <div className="benefits_item benefits_item-1">
                            <div className="benefits_num">1</div>
                            <div className="benefits_img">
                                <img src={benefits1} alt="benefits-1"/>
                            </div>
                            <div className="benefits_info">
                                <h4 className="benefits_info-title">Интеллектуальные режимы</h4>
                                <p className="benefits_info-text">Mavic 2 унаследовал 6 стандартных режимов
                                    интеллектуальной
                                    съемки
                                    QuickShot:Roket/ Dronie/ Circle/ Helix/ Boomerang/ Asteroid.
                                </p>
                            </div>
                        </div>
                        <div className="benefits_item">
                            <div className="benefits_num">2</div>
                            <div className="benefits_img">
                                <img src={benefits2} alt="benefits-2"/>
                            </div>
                            <div className="benefits_info">
                                <h4 className="benefits_info-title">Active Track 2.0 режимы</h4>
                                <p className="benefits_info-text">Усовершенствованный режим второго поколения распознаёт
                                    и
                                    отслеживает объекты ещё
                                    точнее, быстрее и умнее.
                                </p>
                            </div>
                        </div>
                        <div className="benefits_item benefits_item-3">
                            <div className="benefits_num ">3</div>
                            <div className="benefits_img">
                                <img src={benefits3} alt="benefits-3"/>
                            </div>
                            <div className="benefits_info">
                                <h4 className="benefits_info-title">Панорамная съемка</h4>
                                <p className="benefits_info-text">Mavic 2 поддерживает 4 режима
                                    панорамной съёмки: сферическая, 180 градусов, горизонтальная, вертикальная
                                </p>
                            </div>
                        </div>
                        <div className="benefits_item">
                            <div className="benefits_num">4</div>
                            <div className="benefits_img">
                                <img src={benefits4} alt="benefits-4"/>
                            </div>
                            <div className="benefits_info">
                                <h4 className="benefits_info-title">Крутая камера!</h4>
                                <p className="benefits_info-text">Технология Hyperlapse в четырёх режимах исполнения.
                                    Улучшенный фото режим HDR Функция HyperLight
                                    для съёмки в условиях слабого освещения 4К съёмка
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

export default SectionBenefits;