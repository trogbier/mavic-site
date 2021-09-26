import React from 'react';
import arrowDown from '../images/arrow-down.svg'


const ScrollBtn = () => {
    return (
        <div className="scroll-btn">
            <a href="#">
                <img src={arrowDown} alt="arrow-down"/>
            </a>
        </div>
    );
};

export default ScrollBtn;