import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import FeelingsForm from './components/FeelingsForm/FeelingsForm.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const numberRating = (state= [], action) => {
    if(action.type === 'RATE_BY_NUMBER') {
        return action.payload;
    }
}

const storeInstance = createStore(
    combineReducers({
     
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();