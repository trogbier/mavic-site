import React from 'react';
import './style/style.scss';
import Header from "./components/Header";
import MainPages from "./pages/MainPages";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={MainPages}/>
                </Switch>
                <Redirect to='/'/>
            </BrowserRouter>
        </>
    );
}

export default App;
