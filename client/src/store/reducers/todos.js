import { todos as types } from "../constants";

const initialState = {
    loading: true,
    todos: [],
    todosByDate: [],
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
        case types.FETCH_TODOS_BYDATE:
            return {
                ...state,
                loading: true,
            };
        case types.SUCCESS_TODOS_BYDATE:
            return {
                ...state,
                loading: false,
                todosByDate: action.payload.data,
                error: null,
            };
        case types.FAILED_TODOS_BYDATE:
            return {
                ...state,
                loading: false,
                todosByDate: [],
                error: action.payload.data,
            };
        case types.ADD_TODO:
            return {
                ...state,
                loading: true,
            };

        case types.ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: [...state.todos, action.payload.data],
                error: null,
            };

        case types.ADD_TODOS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.data,
            };
        case types.DELETE_TODO:
            return {
                ...state,
                loading: true,
            };
        case types.DELETE_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: state.todos.filter((todo) => todo.id !== action.payload.data),
                error: null,
            };
        case types.DELETE_TODO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.data,
            };

        case types.TOGGLE_TODO:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case types.TOGGLE_TODO_SUCCESS:
            console.log(action);
            return {
                ...state,
                loading: false,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.data ? { ...todo, completed: !todo.completed } : todo
                ),
            };

        case types.TOGGLE_TODO_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.data,
            };

        default:
            return state;
    }
};
