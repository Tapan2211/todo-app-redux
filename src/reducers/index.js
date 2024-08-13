import taskReducer from './taskReducer';
import countReducer from './counterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    tasks: taskReducer,
    count: countReducer,  // Key should match how you're accessing the state
});

export default rootReducer;
