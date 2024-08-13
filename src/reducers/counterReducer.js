import { INCREMENT, DECREMENT, RESET } from "../utills/config";

const initialState = 0

const countReducer = (state = initialState, action) => {
    console.log('Action received:', action.type);
    console.log('Current state:', state.count);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,  // Reset the count to 0
            };
        default:
            return state;
    }
};

export default countReducer;
