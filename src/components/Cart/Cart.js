import React, { Component } from 'react';
import Navigation from '../Navigation';
import './cart.css';
import CartItem from './CartItem';
import { actGetAllCart } from '../../action/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Cart extends Component {

    componentDidMount = () => {
        this.props.getAllCart()
    }

    showListCart = () => {
        let result = <tr></tr>;
        let { cart } = this.props
        if (cart && cart.length > 0) {
            result = cart.map((cart, index) => {
                return <CartItem cart={cart} key={index} />
            })
        }
        return result;
    }

    render() {
        let { match } = this.props;
        let title = match.path.split('/')[1];
        return (
            <div>
                <Navigation title={title} />
                <div className="contaner-cart">
                    <h2>shoping cart</h2>
                    <table>
                        <tbody>
                            {this.showListCart()}
                        </tbody>
                    </table>
                    <Link to="/checkout" className="btn-checkout">CHECKOUT</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllCart: () => {
            dispatch(actGetAllCart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);