import React, {FormEvent} from 'react';
import youtube from '../images/youtube.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'

const SectionContact = () => {

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const data = {
            username: `${formData.get('username')}`,
            email: `${formData.get('email')}`,
            problem: `${formData.get('problem')}`
        }
        console.log(data)
    }

    return (
        <section className="page-section contacts" id='contacts'>
            <div className="page-section_wrapper top_wrapper">
                <div className="container">
                    <h3 className="title">Контакты</h3>
                    <div className="contacts_inner">
                        <div className="contacts_info">
                            <div className="contacts_info-box">
                                <p className="contacts_info-title">Киев</p>
                                <a className="contacts_info-phone" href="tel:+80505676767">+8 (050) 567– 67 – 67</a>
                                <br/>
                                <a className="contacts_info-email"
                                   href="mailto:dgi.mavic2pro.kiev@mail.ru">dgi.mavic2pro.kiev@mail.ru</a>
                            </div>
                            <div className="contacts_info-box">
                                <p className="contacts_info-title">Москва</p>
                                <a className="contacts_info-phone" href="tel:+74995676767">+7 (499) 567 – 67 – 67</a>
                                <br/>
                                <a className="contacts_info-email"
                                   href="mailto:dgi.mavic2pro.moscow@mail.ru">dgi.mavic2pro.moscow@mail.ru</a>
                            </div>
                            <div className="contacts_info-box">
                                <p className="contacts_info-title">Минск</p>
                                <a className="contacts_info-phone" href="tel:+375175676767">+3 (7517) 567– 67 – 67</a>
                                <br/>
                                <a className="contacts_info-email"
                                   href="mailto:dgi.mavic2pro.minsk@mail.ru">dgi.mavic2pro.minsk@mail.ru</a>
                            </div>
                        </div>
                        <div className="contacts_form">
                            <form onSubmit={(e) => submitHandler(e)}>
                                <h4 className="contacts_form-title">Остались вопросы? </h4>
                                <p className="contacts_form-text">Мы обязательно свяжемся с вами в течение двух рабочих
                                    дней</p>
                                <div className="contacts_form-line">
                                    <input className="contacts_form-input" placeholder="Ваше имя" type="text"
                                           name={'username'} required/>
                                    <input className="contacts_form-input" placeholder="Ваше e-mail" type="email"
                                           name={'email'} required/>
                                </div>
                                <textarea className="contacts_form-textarea" placeholder="Что вас интересует?"
                                          name={'problem'} required maxLength={500} minLength={10}/>
                                <button className="contacts_form-btn" type="submit">Отправить</button>
                            </form>
                        </div>
                        <ul className="contacts_social-list">
                            <li className="contacts_social-item">
                                <a href="https://www.instagram.com/?hl=en" className="contacts_social-link"
                                   target={'_blank'} rel="noreferrer">
                                    <img src={facebook} alt="facebook icon"/>
                                </a>
                            </li>
                            <li className="contacts_social-item">
                                <a href="https://www.instagram.com/?hl=en" className="contacts_social-link"
                                   target={'_blank'} rel="noreferrer">
                                    <img src={youtube} alt="youtube icon"/>
                                </a>
                            </li>
                            <li className="contacts_social-item">
                                <a href="https://www.instagram.com/?hl=en" className="contacts_social-link"
                                   target={'_blank'} rel="noreferrer">
                                    <img src={instagram} alt="instagram icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <footer className="footer">
                        <div className="container">
                            <p className="footer_copy">
                                © DJI, 2020
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </section>


    );
};

export default SectionContact;