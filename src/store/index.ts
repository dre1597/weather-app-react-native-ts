import { configureStore } from '@reduxjs/toolkit';

import weatherReducer from './weather';
import previousSearchesReducer from './previousSearches';

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        previousSearches: previousSearchesReducer,
    },
});

export default store;
