import { render } from 'react-dom';
import React from 'react';
import store from './src/frontend/store';
import Container from './src/frontend/Container';
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <Container/>
    </Provider>
    ,
    document.getElementById('app')
);