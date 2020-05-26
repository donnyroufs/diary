import todosReducer from "../reducers/todos";
import { todos as types } from "../constants";

const initialState = {
    loading: true,
    todos: [],
    error: null,
};

describe("Todos Reducer", () => {
    it("Should return default state", () => {
        const newState = todosReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it("Should set loading state to true", () => {
        // const todos = [{ title: "test" }, { title: "test2" }];

        const newState = todosReducer(undefined, {
            type: types.FETCH_TODOS,
        });

        expect(newState).toEqual(initialState);
    });
});
