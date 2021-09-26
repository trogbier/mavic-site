import React from 'react';
import './style/style.scss';
import Header from "./components/Header";
import MainPages from "./pages/MainPages";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header/>
            <MainPages/>
            <Footer/>
        </>
    );
}

export default App;
