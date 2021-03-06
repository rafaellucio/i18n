import React from 'react';
import { useTranslation } from "react-i18next";
import logo from './logo.svg';


import './App.css';

function App() {

  /**
   * Import t from useTranslation and use to translate your resource keys in public/locales/YOUR_LANG/LANG.json
   */
  const [t, i18n] = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {
            t('WELCOME_TO_REACT')
          }
        </p>
        <button onClick={() => changeLanguage('en')}>{t('en')}</button>
        <button onClick={() => changeLanguage('ptbr')}>{t('ptbr')}</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
