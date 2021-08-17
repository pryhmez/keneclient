import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import AppRouter from './config/AppRouter';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import App from './App';
// import Landing from './pages/Landing';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <HashRouter>
      <div id='whole'>
        <Navigation />
        <AppRouter />
        {/* <Footer /> */}
      </div>
      
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
