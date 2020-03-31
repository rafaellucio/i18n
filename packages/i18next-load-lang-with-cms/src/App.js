import React, { Suspense } from 'react';
import { useTranslation } from "react-i18next";
import logo from './logo.svg';

import './App.css';

const Loader = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>loading...</div>
    </header>
  </div>
);


function Page() {
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
          {t('labelsIntendedCredit')}
          {t('commons:commonsYes')}
        </p>
        <button type="button" onClick={() => changeLanguage('en-US')}>{t('en-US')}</button>
        <button type="button" onClick={() => changeLanguage('pt-BR')}>{t('pt-BR')}</button>
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

const App = () => (
  <Suspense fallback={<Loader />}>
    <Page />
  </Suspense>
)

export default App;
