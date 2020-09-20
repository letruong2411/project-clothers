import callAPI from './../untils/callapi'
import * as Types from '../constants/ActionTypes'

// lấy tất cả user
export const fetchAllUserInDB = (users) => {
    return {
        type: Types.GET_ALL_USER_IN_DB,
        users: users
    }
}

export const getAllUsersAPI = () => {
    return dispatch => {
        return callAPI('users', 'GET', null).then(res => {
            dispatch(fetchAllUserInDB(res.data))
        })
    }
}

// đăng ký user
export const fetchNewUserRegister = (user) => {
    return {
        type: Types.ADD_NEW_USER,
        user: user
    }
}

export const addNewUserToAPI = (user) => {
    return dispatch => {
        return callAPI('users', 'POST', user).then(res => {
            dispatch(fetchNewUserRegister(res.data))
        })
    }
}

//Delete User
export const actDeleteUser = (id) => {
    return {
        type: Types.DELETE_USER,
        id: id
    }
}
export const actDeleteUserRequest = (id) => {
    return dispatch => {
        return callAPI(`users/${id}`, 'DELETE', null).then(() => {
            dispatch(actDeleteUser(id))
        })
    }
}
// Get user by Id
export const actGetUserByID = (user) => {
    return {
        type: Types.GET_USER_BY_ID,
        user: user
    }
}
export const actGetUserByIDRequest = (id) => {
    return dispatch => {
        return callAPI(`users/${id}`, 'GET', null).then(res => {
            return dispatch(actGetUserByID(res.data))
        })
    }
}
//Edit User
export const actEditUser = (user) => {
    return {
        type: Types.EDIT_USER,
        user: user
    }
}
export const actEditUserRequest = (user, id) => {
    return dispatch => {
        return callAPI(`users/${id}`, 'PUT', user).then(res => {
            return dispatch(actEditUser(res.data))
        })
    }
}

/** -----------------------------------------------------------PRODUCT------- */
export const actGetAllProduct = (products) => {
    return {
        type: Types.GET_ALL_PRODUCT,
        products: products
    }
}

export const actGetAllProductRequest = () => {
    return dispatch => {
        return callAPI('products', 'GET', null).then(res => {
            dispatch(actGetAllProduct(res.data))
        })
    }
}
// add product
export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product: product
    }
}
export const actAddProductRequest = (product) => {
    return dispatch => {
        return callAPI('products', 'POST', product).then(res => {
            return dispatch(actAddProduct(res.data))
        })
    }
}
// edit product
export const actEditProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product: product
    }
}
export const actEditProductRequest = (product, id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'PUT', product).then(res => {
            return dispatch(actEditProduct(res.data))
        })
    }
}
// Delete Product
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id: id
    }
}
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'DELETE', null).then(() => {
            dispatch(actDeleteProduct(id))
        })
    }
}

//Lấy SP by ID
export const actGetProductByID = (product) => {
    return {
        type: Types.GET_PRODUCT_BY_ID,
        product: product
    }
}

export const actGetProductByIDRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'GET', null).then(res => {
            return dispatch(actGetProductByID(res.data))
        })
    }
}


//--------------------------------------------------CART---------------

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}

export const actGetAllCart = () => {
    return {
        type: Types.GET_ALL_CART
    }
}

export const actDeleteCartItem = (cart) => {
    return {
        type: Types.DELETE_CART_ITEM,
        cart: cart
    }
}

export const actUpCart = (cart) => {
    return {
        type: Types.UP_CART,
        cart: cart
    }
}

export const actDownCart = (cart) => {
    return {
        type: Types.DOWN_CART,
        cart: cart
    }
}

//----------------------------------------------CUSTOMER-----
export const actAddCustomer = (customer) => {
    return {
        type: Types.ADD_NEW_CUSTOMER,
        customer: customer
    }
}

export const actAddCustomerRequest = (customer) => {
    return dispatch => {
        return callAPI('customer', 'POST', customer).then(res => {
            dispatch(actAddCustomer(res.data))
        })
    }
}

export const actGetAllCustomer = (customer) => {
    return {
        type: Types.GET_ALL_CUSTOMER,
        customer: customer
    }
}

export const actGetAllCustomerRequest = () => {
    return dispatch => {
        return callAPI('customer', 'GET', null).then(res => {
            dispatch(actGetAllCustomer(res.data))
        })
    }
}
// Get Customer by ID
export const actGetCustomerByID = (customer) => {
    return {
        type: Types.GET_CUSTOMER_BY_ID,
        customer: customer
    }
}
export const actGetCustomerByIDRequest = (id) => {
    return dispatch => {
        return callAPI(`customer/${id}`, 'GET', null).then(res => {
            return dispatch(actGetCustomerByID(res.data))
        })
    }
}
// edit Customer
export const actEditCustomer = (customer) => {
    return {
        type: Types.EDIT_CUSTOMER,
        customer: customer
    }
}
export const actEditCustomerRequest = (customer, id) => {
    return dispatch => {
        return callAPI(`customer/${id}`, 'PUT', customer).then(res => {
            return dispatch(actEditCustomer(res.data))
        })
    }
}
// Delete
export const actDeleteCustomer = (id) => {
    return {
        type: Types.DELETE_CUSTOMER,
        id: id
    }
}
export const actDeleteCustomerRequest = (id) => {
    return dispatch => {
        return callAPI(`customer/${id}`, 'DELETE', null).then(() => {
            dispatch(actDeleteCustomer(id))
        })
    }
}