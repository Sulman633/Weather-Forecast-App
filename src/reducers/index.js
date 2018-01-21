import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// adds the weather reducer to state as state.weather
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
