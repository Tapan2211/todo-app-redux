import { ADD_TASK, DELETE_TASK, INCREMENT, DECREMENT, RESET } from "../utills/config"

export const addTodo = (text) => {
    return {
        type: ADD_TASK,
        payload: {
            id: new Date().getTime(),
            text: text,
        }
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    };
};

export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
    };
};

export const reset = () => {
    return {
        type: RESET,
    };
};
