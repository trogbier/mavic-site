import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_inner">
                    <a href="#" className="logo">
                        <img src={logo} alt="logo"/>
                    </a>

                    <nav className="menu">
                        <ul className="menu_list">
                            <li className="menu_list-item">
                                <a href="#" className="menu_list-link">О ДРОНЕ</a>
                            </li>
                            <li className="menu_list-item">
                                <a href="#" className="menu_list-link">ПРЕИМУЩЕСТВА</a>
                            </li>
                            <li className="menu_list-item">
                                <a href="#" className="menu_list-link">ХАРАКТЕРИСТИКИ</a>
                            </li>
                            <li className="menu_list-item">
                                <a href="#" className="menu_list-link">ВОПРОСЫ</a>
                            </li>
                            <li className="menu_list-item">
                                <a href="#" className="menu_list-link">КОНТАКТЫ</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header_info">
                        <button className="header_btn">купить</button>
                        <a href="tel:89885882166" className="header_phone">8 (988) 588 21 66</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;