import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './app';
import reducers from './reducers';

let store = createStore(reducers, { counter: 0 });

store.subscribe(x => {
    x = store.getState();
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)