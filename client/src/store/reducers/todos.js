import * as types from "../constants";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TODOS:
            return action.payload;
        default:
            return state;
    }
};
