import fetchMock from "fetch-mock";
import { makeMockStore } from "../__mocks__/mockStore";
import { todos as types } from "../store/constants";
import todosReducer from "../store/reducers/todos";
import * as actions from "../store/actions/todos";
// import fetchMock from "fetch-mock-jest";

const initialState = {
    loading: true,
    todos: [],
    error: null,
};

const store = makeMockStore();

describe("[REDUX] Todos", () => {
    describe("[REDUCER] FETCH_TODOS", () => {
        it("Should return default state", () => {
            const newState = todosReducer(undefined, {});
            expect(newState).toEqual(initialState);
        });

        it("Should set loading state to true", () => {
            const newState = todosReducer(undefined, {
                type: types.FETCH_TODOS,
            });

            expect(newState).toEqual(initialState);
        });

        it("Should set the loading state to false when SUCCESS_FETCH_TODOS", () => {
            const newState = todosReducer(undefined, {
                type: types.SUCCESS_FETCH_TODOS,
                payload: {
                    ok: true,
                },
            });

            expect(newState.loading).toBeFalsy();
        });

        it("Should set the loading state to false when FAILED_FETCH_TODOS", () => {
            const newState = todosReducer(undefined, {
                type: types.FAILED_FETCH_TODOS,
                payload: {
                    ok: false,
                },
            });

            expect(newState.loading).toBeFalsy();
        });
    });

    describe("[ACTION] fetchTodos", () => {
        beforeEach(() => {
            store.clearActions();
            fetchMock.restore();
        });

        afterEach(() => () => {
            store.clearActions();
            fetchMock.restore();
        });

        it(`Should call ${types.SUCCESS_FETCH_TODOS} when ok is true.`, () => {
            // Expected response from API
            const response = {
                ok: true,
                data: [],
            };

            fetchMock.getOnce(actions.ENDPOINT, {
                body: response,
            });

            const expected = [actions.fetchTodosRequest(), actions.fetchTodosSuccess(response)];

            return store.dispatch(actions.fetchTodos()).then(() => {
                const actual = store.getActions();
                expect(actual).toEqual(expected);
                expect(actual[1].payload.ok).toBeTruthy();
            });
        });

        it(`Should call ${types.FAILED_TODOS} when a bad server request.`, () => {
            const response = {
                ok: false,
                data: "invalid json response body at /api/todo reason: Unexpected end of JSON input",
            };

            fetchMock.getOnce(actions.ENDPOINT, 500);

            const expected = [actions.fetchTodosRequest(), actions.fetchTodosFailed(response)];

            return store.dispatch(actions.fetchTodos()).then(() => {
                const actual = store.getActions();
                expect(actual).toEqual(expected);
            });
        });
    });

    describe("[REDUCER] addTodo", () => {
        it("Should set loading state to true", () => {
            const newState = todosReducer(undefined, {
                type: types.ADD_TODO,
            });
            expect(newState.loading).toBeTruthy();
        });

        it("Should set the loading state to false when SUCCESS_ADD_TODO", () => {
            const newState = todosReducer(undefined, {
                type: types.SUCCESS_ADD_TODO,
                payload: {
                    data: [],
                },
            });
            expect(newState.loading).toBeFalsy();
        });

        it("Should set the loading state to false when FAILED_ADD_TODO", () => {
            const newState = todosReducer(undefined, {
                type: types.FAILED_ADD_TODO,
                payload: {
                    data: null,
                },
            });
            expect(newState.loading).toBeFalsy();
        });
    });

    describe("[ACTION] addTodo", () => {
        beforeEach(() => {
            store.clearActions();
            fetchMock.restore();
        });

        afterEach(() => () => {
            store.clearActions();
            fetchMock.restore();
        });

        it(`Should call ${types.SUCCESS_ADD_TODO} when ok is true.`, () => {
            // Expected response from API
            const response = {
                ok: true,
                data: [],
            };

            fetchMock.getOnce(`${actions.ENDPOINT}/date?date=today`, {
                body: response,
            });

            const expected = [actions.addTodosSuccess(response), actions.addTodosFailed(response)];

            return store.dispatch(actions.addTodo({ current: "today", payload: [] })).then(() => {
                const actual = store.getActions();
                expect(actual).toEqual(expected);
                expect(actual[1].payload.ok).toBeTruthy();
            });
        });
    });
});
