import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/Home';
import SearchScreen from './src/screens/Search';
import store from './src/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );
};

export default App;
