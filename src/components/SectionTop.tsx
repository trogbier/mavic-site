import React from 'react';
import ScrollBtn from "./ScrollBtn";
import youtube from '../images/youtube.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import mavic from '../images/mavic.png'

const SectionTop = () => {
    return (
        <section className="page-section top">
            <div className="page-section_wrapper top_wrapper">
                <div className="container">
                    <div className="top_inner">
                        <h1 className="top_title">Mavic 2 Pro</h1>
                        <img src={mavic} alt="mavic"/>
                        <p className="top_text">
                            Квадрокоптер Dji Mavic 2 Pro
                            с профессиональной камерой Hasselblad
                        </p>
                        <ul className="top_social-list">
                            <li className="top_social-item">
                                <a href="#" className="top_social-link">
                                    <img src={facebook} alt="facebook icon"/>
                                </a>
                            </li>
                            <li className="top_social-item">
                                <a href="#" className="top_social-link">
                                    <img src={youtube} alt="youtube icon"/>
                                </a>
                            </li>
                            <li className="top_social-item">
                                <a href="#" className="top_social-link">
                                    <img src={instagram} alt="instagram icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ScrollBtn/>
            </div>
        </section>
    );
};

export default SectionTop;