import React from 'react';
import ScrollBtn from "./ScrollBtn";
import slider1 from '../images/slider-1.jpg'
import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'


const SectionProduct = () => {
    return (
        <section className="page-section products">
            <div className="page-section_wrapper top_wrapper">
                <div className="container">
                    <h3 className="title products_title">Что такое Mavic 2 Pro?</h3>
                    <div className="products_inner">
                        <div className="products_text">
                            <p>Дрон Mavic 2 Pro - это инженерное чудо, идеальное для аэросъемки. Дрон обладает всеми
                                лучшими
                                технологиями
                                DJI, он преобразит мир аэросъемки.
                            </p>
                            <p>Mavic 2 Pro оснащен совершенно новой камерой Hasselblad L1D-20c. Камера L1D-20c работает
                                по
                                уникальной
                                технологии Hasselblad Natural Colour Solution (HNCS)5, позволяющей пользователям делать
                                великолепные снимки с
                                воздуха с разрешением в 20 мегапикселей и потрясающими цветами.
                            </p>
                        </div>
                        <div className="products_slider-box">
                            <p className="products_slider-text">
                                Лучшая беспилотная
                                технология аэросъемки
                            </p>
                            <div className="products_slider">
                                <div className="products_slider-item">
                                    <img src={slider1} alt="slider-1" className="products_slider-img"/>
                                </div>
                                {/*<div className="products_slider-item">*/}
                                {/*    <img src={slider1} alt="slider-2" className="products_slider-img"/>*/}
                                {/*</div>*/}
                                {/*<div className="products_slider-item">*/}
                                {/*    <img src={slider1} alt="slider-3" className="products_slider-img"/>*/}
                                {/*</div>*/}
                                {/*<div className="products_slider-item">*/}
                                {/*    <img src={slider1} alt="slider-4" className="products_slider-img"/>*/}
                                {/*</div>*/}
                                {/*<div className="products_slider-item">*/}
                                {/*    <img src={slider1} alt="slider-5" className="products_slider-img"/>*/}
                                {/*</div>*/}
                                {/*<div className="products_slider-item">*/}
                                {/*    <img src={slider1} alt="slider-6" className="products_slider-img"/>*/}
                                {/*</div>*/}
                                <button className='slider-btn slider-btn_left'>
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.21839 1L1 9L9.21839 17"/>
                                    </svg>
                                </button>
                                <button className='slider-btn slider-btn_right'>
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.78161 17L9 9L0.78161 1"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <ScrollBtn/>
            </div>
        </section>

    );
};

export default SectionProduct;