import axios from "axios";
import { todos as types } from "../constants";

const fetchTodosRequest = () => {
    return {
        type: types.FETCH_TODOS,
    };
};

const fetchTodosSuccess = (payload) => {
    return {
        type: types.SUCCESS_TODOS,
        payload,
    };
};

const fetchTodosFailed = (payload) => {
    return {
        type: types.FAILED_TODOS,
        payload,
    };
};

const fetchTodos = () => (dispatch) => {
    dispatch(fetchTodosRequest());
    axios
        .get("/api/todo")
        .then((data) => dispatch(fetchTodosSuccess(data)))
        .catch((err) => dispatch(fetchTodosFailed(err.message)));
};

export { fetchTodos };
