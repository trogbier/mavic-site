import React from 'react';
import ScrollBtn from "./ScrollBtn";
import slider1 from '../images/slider-1.jpg'


const SectionProduct = () => {
    return (
        <section className="page-section product">
            <div className="container">
                <h3 className="title products_title">Что такое Mavic 2 Pro?</h3>
                <div className="products_inner">
                    <div className="product_text">
                        <p>Дрон Mavic 2 Pro - это инженерное чудо, идеальное для аэросъемки. Дрон обладает всеми лучшими
                            технологиями
                            DJI, он преобразит мир аэросъемки.
                        </p>
                        <p>Mavic 2 Pro оснащен совершенно новой камерой Hasselblad L1D-20c. Камера L1D-20c работает по
                            уникальной
                            технологии Hasselblad Natural Colour Solution (HNCS)5, позволяющей пользователям делать
                            великолепные снимки с
                            воздуха с разрешением в 20 мегапикселей и потрясающими цветами.
                        </p>
                    </div>
                    <div className="products_slider_box">
                        <p className="products_slider_text">
                            Лучшая беспилотная
                            технология аэросъемки
                        </p>
                        <div className="products_slider">
                            <div className="products_slider-item">
                                <img src={slider1} alt="slider-1" className="products_slider-img"/>
                            </div>
                            <div className="products_slider-item">
                                <img src={slider1} alt="slider-2" className="products_slider-img"/>
                            </div>
                            <div className="products_slider-item">
                                <img src={slider1} alt="slider-3" className="products_slider-img"/>
                            </div>
                            <div className="products_slider-item">
                                <img src={slider1} alt="slider-4" className="products_slider-img"/>
                            </div>
                            <div className="products_slider-item">
                                <img src={slider1} alt="slider-5" className="products_slider-img"/>
                            </div>
                            <div className="products_slider-item">
                                <img src={slider1} alt="slider-6" className="products_slider-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollBtn/>
        </section>

);
};

export default SectionProduct;