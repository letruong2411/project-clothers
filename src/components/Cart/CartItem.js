import React, { Component } from 'react';
import {
    actDeleteCartItem,
    actUpCart,
    actDownCart
} from '../../action/index';
import { connect } from 'react-redux';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.cart ? this.props.cart.quantity : null
        }
    }

    onDeleteCartItem = async function (cart) {
        await this.props.deleteCartItem(cart)
        await this.setState({
            quantity: this.props.cart.quantity
        })
    }

    onUp = async (cart, quantity) => {
        if (this.props.cart.quantity >= this.props.cart.product.quantity
            || quantity >= this.props.cart.product.quantity) return
        await this.props.upCartItem(cart)
        await this.setState({
            quantity: quantity + 1
        })
    }

    onDown = async (cart, quantity) => {
        if (this.props.cart.quantity <= 1 || quantity <= 1) return
        await this.props.downCartItem(cart);
        await this.setState({
            quantity: quantity - 1
        })
    }

    render() {
        let { quantity } = this.state
        let { cart } = this.props;
        if (quantity) {
            return (
                <tr>
                    <th> <img src={cart.product.image} alt="" /> </th>
                    <th>
                        <p>{cart.product.nameProduct}</p>
                    </th>
                    <th>
                        <input className="listsize" list="allsize" name="size" />
                        <datalist id="allsize">
                            <option value="S" />
                            <option value="M" />
                            <option value="L" />
                            <option value="XL" />
                        </datalist>
                    </th>
                    <th>
                        <div className="soluong">
                            <button type="button" className="btn btn-warning"
                                onClick={() => this.onDown(cart, quantity)}
                            >-</button>
                            <span style={{ marginLeft: '10px', marginRight: '10px' }}>{quantity}</span>
                            <button type="button" className="btn btn-warning"
                                onClick={() => this.onUp(cart, quantity)}
                            >+</button>
                        </div>
                    </th>
                    <th>
                        <span>$</span>
                        <span>{quantity * cart.product.price}</span>
                    </th>
                    <th>
                        <button type="button" className="btn btn-danger"
                            onClick={() => this.onDeleteCartItem(cart)}
                        >Delete</button>
                    </th>
                </tr>
            );
        } else {
            return <div></div>
        }
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteCartItem: (cart) => {
            dispatch(actDeleteCartItem(cart))
        },
        upCartItem: (cart) => {
            dispatch(actUpCart(cart))
        },
        downCartItem: (cart) => {
            dispatch(actDownCart(cart))
        }
    }
}

export default connect(null, mapDispatchToProps)(CartItem);