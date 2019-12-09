import React from 'react';
import './App.css';
import logo from './favicon1.png';

const App = () => {
    return (
        <main className="wrapper">
            <div className="header"><img className="logo" src={logo} alt="logo" /></div>
            <div className="name"><h1>Автоизкакака3в3ка </h1></div>
            <div className="login">
                <label>Логин</label>
                <input type="text" />
                <label>Пароль</label>
                <input type="text" />
                <input type="button" value="ВОЙТИ" />
            </div>
        </main>
    )
}
export default App;