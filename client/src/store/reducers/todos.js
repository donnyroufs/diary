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
        error: null,
      };
    case types.SUCCESS_FETCH_TODOS:
      return {
        ...state,
        loading: false,
        todos: action.payload.data,
      };
    case types.FAILED_FETCH_TODOS:
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
        error: null,
      };
    case types.SUCCESS_FETCH_TODOS_BYDATE:
      return {
        ...state,
        loading: false,
        todos: action.payload.data.ok ? action.payload.data : [],
        error: null,
      };
    case types.FAILED_FETCH_TODOS_BYDATE:
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload.data,
      };
    case types.ADD_TODO:
      return {
        ...state,
        loading: true,
      };

    case types.SUCCESS_ADD_TODO:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload.data],
      };

    case types.FAILED_ADD_TODO:
      return {
        ...state,
        loading: false,
      };
    case types.DELETE_TODO:
      return {
        ...state,
        loading: true,
      };
    case types.SUCCESS_DELETE_TODO:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload.data),
      };
    case types.FAILED_DELETE_TODO:
      return {
        ...state,
        loading: false,
      };

    case types.TOGGLE_TODO:
      return {
        ...state,
        loading: true,
      };

    case types.SUCCESS_TOGGLE_TODO:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.data
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case types.FAILED_TOGGLE_TODO:
      return {
        ...state,
        loading: false,
      };

    case types.UPDATE_TODO:
      return {
        ...state,
        loading: true,
      };

    case types.SUCCESS_UPDATE_TODO:
      return {
        ...state,
        loading: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.data.id ? { ...action.payload.data } : todo
        ),
      };

    case types.FAILED_UPDATE_TODO:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
