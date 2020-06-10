import { todos as types } from "../constants";

export const ENDPOINT = "/api/todo";

export const fetchTodosRequest = () => ({
    type: types.FETCH_TODOS,
});

export const fetchTodosSuccess = (payload) => ({
    type: types.SUCCESS_FETCH_TODOS,
    payload,
});

export const fetchTodosFailed = (payload) => ({
    type: types.FAILED_FETCH_TODOS,
    payload,
});

// @ACTION

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

export const fetchTodosByDateRequest = () => ({
    type: types.FETCH_TODOS_BYDATE,
});

export const fetchTodosByDateSuccess = (payload) => ({
    type: types.SUCCESS_FETCH_TODOS_BYDATE,
    payload,
});

export const fetchTodosByDateFailed = (payload) => ({
    type: types.FAILED_FETCH_TODOS_BYDATE,
    payload,
});

// @ACTION
export const fetchTodosByDate = (date) => async (dispatch) => {
    dispatch(fetchTodosByDateRequest());
    return fetch(`${ENDPOINT}/date?date=${date}`)
        .then((res) => res.json())
        .then((data) => dispatch(fetchTodosByDateSuccess(data)))
        .catch((err) =>
            dispatch(
                fetchTodosByDateFailed({
                    ok: false,
                    data: err.message,
                })
            )
        );
};

export const addTodosSuccess = (payload) => ({
    type: types.SUCCESS_ADD_TODO,
    payload,
});

export const addTodosFailed = (payload) => ({
    type: types.FAILED_ADD_TODO,
    payload,
});

//@ACTION
export const addTodo = (_payload) => async (dispatch) => {
    const { current: date, ...payload } = _payload;
    return fetch(`${ENDPOINT}?date=${date}`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => (data.ok ? dispatch(addTodosSuccess(data)) : dispatch(addTodosFailed(data))))
        .catch((err) =>
            dispatch(
                addTodosFailed({
                    ok: false,
                    data: err.message,
                })
            )
        );
};

export const toggleTodoCompleteRequest = () => ({
    type: types.TOGGLE_TODO,
});

export const successToggleTodoComplete = (payload) => ({
    type: types.SUCCESS_TOGGLE_TODO,
    payload,
});

export const failedToggleTodoComplete = (payload) => ({
    type: types.FAILED_TOGGLE_TODO,
    payload,
});

export const toggleTodoComplete = ({ id, completed }) => (dispatch) => {
    dispatch(toggleTodoCompleteRequest());
    const toggleCompleted = !completed;
    return fetch(`${ENDPOINT}?id=${id}&completed=${toggleCompleted}`, {
        method: "PUT",
    })
        .then((res) => res.json())
        .then((data) => dispatch(successToggleTodoComplete({ data: id })))
        .catch((err) => dispatch(failedToggleTodoComplete(err.message)));
};

export const deleteTodoRequest = () => ({
    type: types.DELETE_TODO,
});

export const successDeleteTodo = (payload) => ({
    type: types.SUCCESS_DELETE_TODO,
    payload,
});

export const failedDeleteTodo = (err) => ({
    type: types.FAILED_TOGGLE_TODO,
});

// @ ACTION
export const deleteTodo = (id) => async (dispatch) => {
    dispatch(deleteTodoRequest());
    return fetch(`${ENDPOINT}?id=${id}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((_) => dispatch(successDeleteTodo({ data: id })))
        .catch((err) => dispatch(failedDeleteTodo(err.message)));
};

export const updateTodoRequest = () => ({
    type: types.UPDATE_TODO,
});

export const successUpdateTodoRequest = (payload) => ({
    type: types.SUCCESS_UPDATE_TODO,
    payload,
});

export const failedUpdateTodoRequest = (payload) => ({
    type: types.FAILED_UPDATE_TODO,
    payload,
});

export const updateTodo = ({ id, title, description }) => (dispatch) => {
    dispatch(updateTodoRequest());
    return fetch(`${ENDPOINT}?id=${id}&title=${title}&description=${description}`, {
        method: "PUT",
    })
        .then((res) => res.json())
        .then((data) => dispatch(successUpdateTodoRequest(data)))
        .catch((err) => dispatch(failedUpdateTodoRequest(err.message)));
};
