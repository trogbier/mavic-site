import React from 'react';
import arrowDown from '../images/arrow-down.svg'
import {useHistory} from "react-router-dom";


const ScrollBtn = ({nextLink}: { nextLink?: string }) => {
    const history = useHistory()
    return (
        <div className="scroll-btn" onClick={() => console.log(history)}>
            <a href={`#${nextLink}`}>
                <img src={arrowDown} alt="arrow-down"/>
            </a>
        </div>
    );
};

export default ScrollBtn;