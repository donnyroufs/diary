import axios from "axios";
import { todos as types } from "../constants";

export const ENDPOINT = "/api/todo";

export const fetchTodosRequest = () => {
    return {
        type: types.FETCH_TODOS,
    };
};

export const fetchTodosSuccess = (payload) => {
    return {
        type: types.SUCCESS_TODOS,
        payload,
    };
};

export const fetchTodosFailed = (payload) => {
    return {
        type: types.FAILED_TODOS,
        payload,
    };
};

export const fetchTodos = () => async (dispatch) => {
    dispatch(fetchTodosRequest());
    return fetch(ENDPOINT)
        .then((res) => res.json())
        .then((data) => dispatch(fetchTodosSuccess(data)))
        .catch((err) =>
            dispatch(
                fetchTodosFailed({
                    ok: false,
                    data: err.message,
                })
            )
        );
};
