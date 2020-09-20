import * as Types from './../constants/ActionTypes';

let initialState = [];

const customer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_NEW_CUSTOMER: {
            state.push(action.customer);
            return [...state];
        }
        case Types.GET_ALL_CUSTOMER: {
            state = action.customer;
            return [...state];
        }
        case Types.DELETE_CUSTOMER: {
            let id = action.id;
            let index = state.findIndex(customer => customer.id === id);
            if (index !== undefined) {
                state.splice(index, 1)
            }
            return [...state]
        }
        case Types.GET_CUSTOMER_BY_ID: {
            state = action.customer;
            return state;
        }
        case Types.EDIT_CUSTOMER: {
            state = action.customer;
            return [state]
        }
        default: return [...state];
    }
}

export default customer;