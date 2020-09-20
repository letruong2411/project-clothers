import { combineReducers } from 'redux';
import users from './users'
import products from './products'
import cart from './cart';
import customer from './customer'

const appReducers = combineReducers({
    users: users,
    products: products,
    cart: cart,
    customer: customer
})

export default appReducers;