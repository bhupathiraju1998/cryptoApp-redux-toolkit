import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}><App/></Provider>
    </BrowserRouter>
,document.getElementById('root'));