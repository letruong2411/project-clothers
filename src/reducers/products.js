import * as Types from '../constants/ActionTypes';

let initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_PRODUCT: {
            state = action.products;
            return [...state];
        }
        case Types.GET_PRODUCT_BY_ID: {
            state = action.product;
            return [state];
        }
        case Types.DELETE_PRODUCT: {
            let id = action.id;
            let index = state.findIndex(product => product.id === id)
            if (index !== undefined) {
                state.splice(index, 1)
            }
            return [...state]
        }
        case Types.ADD_PRODUCT: {
            state.push(action.product);
            return [...state]
        }
        case Types.EDIT_PRODUCT: {
            state = action.product;
            return state
        }
        default: return [...state]
    }
}


export default products;