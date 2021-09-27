import React, { useState} from 'react';
import ScrollBtn from "./ScrollBtn";
import slider1 from '../images/slider-1.jpg'
import slider2 from '../images/slider-2.jpg'
import slider3 from '../images/slider-3.jpg'


const SectionProduct = () => {
    const sliderImg = [slider1, slider2, slider3, slider1, slider2, slider3]
    const [currentSlider, setCurrentSlider] = useState(0)
    const sliderItem: Array<number> = [1, 2, 3, 4, 5, 6]

    const minSlider = () => {
        if (currentSlider > 0) setCurrentSlider(currentSlider - 1)
        return
    }
    const maxSlider = () => {
        if (currentSlider < sliderItem.length - 1) setCurrentSlider(currentSlider + 1)
        return
    }
    const firstStyle = currentSlider === 0 ? 'black' : 'white'
    const firstStyleArrow = currentSlider === 0 ? 'white' : 'black'

    const secondStyle = currentSlider !== sliderItem.length - 1 ? 'white' : 'black'
    const secondStyleArrow = currentSlider !== sliderItem.length - 1 ? 'black' : 'white'

    return (
        <section className="page-section products" id='products'>
            <div className="page-section_wrapper top_wrapper">
                <div className="container">
                    <h3 className="title products_title">Что такое Mavic {currentSlider + 1} Pro?</h3>
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
                                    <img src={sliderImg[currentSlider]} alt={`slider${currentSlider}`}
                                         className="products_slider-img"/>
                                </div>


                                <button className='slider-btn slider-btn_left' onClick={() => minSlider()}
                                        style={{backgroundColor: `${firstStyle}`}}>
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" stroke={`${firstStyleArrow}`}>
                                        <path d="M9.21839 1L1 9L9.21839 17"/>
                                    </svg>
                                </button>
                                <button className='slider-btn slider-btn_right' onClick={() => maxSlider()}
                                        style={{backgroundColor: `${secondStyle}`}}>
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" stroke={`${secondStyleArrow}`}>
                                        <path d="M0.78161 17L9 9L0.78161 1"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <ScrollBtn nextLink={'benefits'}/>
            </div>
        </section>

    );
};

export default SectionProduct;