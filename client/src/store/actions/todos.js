import { todos as types } from "../constants";
import { ToastsStore } from "react-toasts";

export const ENDPOINT = "/api/todo";
export const ENDPOINT_BYDATE = "/api/todo/date?date=1";

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
    .then((data) => {
      if (!data.ok) {
        dispatch(addTodosFailed(data));
        ToastsStore.error("Couldn't add todo");
      } else {
        dispatch(addTodosSuccess(data));
        ToastsStore.success("Added todo");
      }
    })
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
    .then((data) => {
      dispatch(successToggleTodoComplete({ data: id }));
      ToastsStore.success(`Todo is now set to: ${toggleCompleted}.`);
    })
    .catch((err) => {
      dispatch(failedToggleTodoComplete(err.message));
      ToastsStore.error("Couldn't toggle complete");
    });
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
    .then((_) => {
      dispatch(successDeleteTodo({ data: id }));
      ToastsStore.success("Successfuly deleted todo");
    })
    .catch((err) => {
      dispatch(failedDeleteTodo(err.message));
      ToastsStore.error("Failed removing todo.");
    });
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
  return fetch(
    `${ENDPOINT}?id=${id}&title=${title}&description=${description}`,
    {
      method: "PUT",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(successUpdateTodoRequest(data));
      ToastsStore.success("Successfuly updated todo.");
    })
    .catch((err) => {
      dispatch(failedUpdateTodoRequest(err.message));
      ToastsStore.error("Couldn't update todo.");
    });
};
