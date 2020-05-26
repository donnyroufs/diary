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
                todos: action.payload.data,
                loading: false,
            };
        case types.FAILED_TODOS:
            return {
                ...state,
                todos: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
