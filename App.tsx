import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/routes';
import store from './src/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

export default App;
