import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//redux
//usually redux is used in a huge app, not in a small app like this
//but it's good to learn anyway

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {featureReducer} from './reducers'


const store = createStore(featureReducer)


const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, rootElement);
