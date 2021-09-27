import React from 'react';
import arrowDown from '../images/arrow-down.svg'

const ScrollBtn = ({nextLink}: { nextLink?: string }) => {
    return (
        <div className="scroll-btn">
            <a href={`#${nextLink}`}>
                <img src={arrowDown} alt="arrow-down"/>
            </a>
        </div>
    );
};

export default ScrollBtn;