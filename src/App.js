import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Header from './components/Header';
import GlobalStyle from './styles/global';
import Routes from './routes';

import history from './services/history';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <ToastContainer autoclose={3000} />
                <Header />
                <Routes />
                <GlobalStyle />
            </Router>
        </Provider>
    );
}

export default App;
