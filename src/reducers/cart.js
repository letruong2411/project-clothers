import * as Types from './../constants/ActionTypes';

let data = localStorage.getItem('cart');
let dataJson = data ? JSON.parse(data) : [];
let initialState = dataJson ? dataJson : [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART: {
            let { product, quantity } = action;
            let check = state.find(cart => cart.product.id === product.id);
            if (check === undefined) {
                state.push({
                    product,
                    quantity
                })
            } else {
                let index = state.findIndex(cart => cart.product.id === product.id);
                state[index].quantity += quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state]
        }
        case Types.DELETE_CART_ITEM: {
            let cart = action.cart;
            let index = state.findIndex(cartItem => cartItem.product.id === cart.product.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state]
        }
        case Types.GET_ALL_CART: {
            let data = localStorage.getItem('cart');
            state = data ? JSON.parse(data) : [];
            return state ? [...state] : [state]
        }
        case Types.UP_CART: {
            let cart = action.cart;
            let index = state.findIndex(cartItem => cartItem.product.id === cart.product.id);
            if (index !== -1) {
                state[index].quantity++;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        }
        case Types.DOWN_CART: {
            let cart = action.cart;
            let index = state.findIndex(cartItem => cartItem.product.id === cart.product.id);
            if (index !== -1) {
                state[index].quantity--;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        }
        default: return [...state]
    }
}

export default cart;