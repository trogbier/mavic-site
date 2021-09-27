import React from 'react';
import SectionTop from "../components/SectionTop";
import SectionProduct from "../components/SectionProduct";
import SectionBenefits from "../components/SectionBenefits";
import SectionSpecification from "../components/SectionSpecification";
import SectionQuestion from "../components/SectionQuestion";
import SectionContact from "../components/SectionContact";

const MainPages = () => {
    return (
        <div className={'scroller '}>
            <SectionTop/>
            <SectionProduct/>
            <SectionBenefits/>
            <SectionSpecification/>
            <SectionQuestion/>
            <SectionContact/>
        </div>
    );
};

export default MainPages;