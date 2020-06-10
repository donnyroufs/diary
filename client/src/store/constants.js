import { createTypes } from "../utils/createTypes";

const TODOS_CONST = {
    prefix: "[TODOS]",
    constants: ["fetch_todos", "fetch_todos_bydate", "add_todo", "delete_todo", "toggle_todo", "update_todo"],
};

export const todos = createTypes(TODOS_CONST);
