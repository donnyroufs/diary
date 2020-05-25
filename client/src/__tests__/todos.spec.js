import todosReducer from "../store/reducers/todos";
import * as types from "../store/constants";

describe("Todos Reducer", () => {
    it("Should return default state", () => {
        const newState = todosReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it("Should return new state if receiving type", () => {
        const todos = [{ title: "test" }, { title: "test2" }];
        const newState = todosReducer(undefined, {
            type: types.GET_TODOS,
            payload: todos,
        });
        expect(newState).toBe(todos);
    });
});
