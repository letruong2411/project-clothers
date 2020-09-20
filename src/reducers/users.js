import * as Types from '../constants/ActionTypes'

let initialState = [];

const users = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_USER_IN_DB: {
            state = action.users
            return [...state];
        }
        case Types.ADD_NEW_USER: {
            state.push(action.user);
            return [...state];
        }
        case Types.DELETE_USER: {
            let id = action.id;
            let index = state.findIndex(user => user.id === id);
            if (index !== undefined) {
                state.splice(index, 1)
            }
            return [...state]
        }
        case Types.GET_USER_BY_ID: {
            state = action.user;
            return state;
        }
        case Types.EDIT_USER: {
            state = action.user;
            return [state]
        }
        default: return [...state];
    }
}

export default users