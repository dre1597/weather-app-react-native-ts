import { IWeatherInfoList } from './../interfaces/index';
import { IWeather } from '../interfaces/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialPreviousSearchesState: IWeatherInfoList = {
    weatherInfoList: [],
};

const previousSearchesSlice = createSlice({
    name: 'weather',
    initialState: initialPreviousSearchesState,
    reducers: {
        addSearch(state: IWeatherInfoList, action?: PayloadAction<IWeather>) {
            if (action) {
                if (state.weatherInfoList.length === 3) {
                    state.weatherInfoList.shift();
                    state.weatherInfoList.push(action.payload);
                } else {
                    state.weatherInfoList.push(action.payload);
                }
                console.log('Length:' + state.weatherInfoList.length);
            }
        },
    },
});

export const previousSearchesActions = previousSearchesSlice.actions;
export default previousSearchesSlice.reducer;
