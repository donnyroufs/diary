import { todos as types } from "../constants";

const initialState = {
    loading: true,
    todos: [],
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TODOS:
            return {
                ...state,
                loading: true,
            };
        case types.SUCCESS_TODOS:
            return {
                ...state,
                loading: false,
                todos: action.payload.data,
                error: null,
            };
        case types.FAILED_TODOS:
            return {
                ...state,
                loading: false,
                todos: [],
                error: action.payload.data,
            };
        default:
            return state;
    }
};
