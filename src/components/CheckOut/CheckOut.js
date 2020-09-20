import React, { Component } from 'react';
import './checkout.css';
import Navigation from './../Navigation';
import { actAddCustomerRequest } from './../../action/index';
import { connect } from 'react-redux'

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            phone: null,
            address: null,
            message: null
        }
    }

    onChange = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        await this.setState({
            [name]: value
        })
    }

    onSubmit = async (total) => {
        let { fullName, email, phone, address } = this.state;
        if (fullName && email && phone.length === 10 && address) {
            if (localStorage.getItem('cart')) {
                await this.props.addCustomer({
                    fullName,
                    email,
                    phone,
                    address,
                    total
                })
                await alert('Mua hàng thành công');
                await localStorage.setItem('cart', []);
                return window.location.reload()
            }
            return alert('Bạn phải mua hàng trước khi CheckOut')
        }
        return alert('Vui lòng điền thông tin đầy đủ')
    }

    render() {
        let data = localStorage.getItem('cart')
        let cart = data ? JSON.parse(data) : [];
        let TOTAL = 0;
        if (cart && cart.length >= 1) {
            TOTAL = cart.reduce((total, cart) => {
                return total += (cart.quantity * cart.product.price)
            }, 0)
        }
        let { match } = this.props;
        let title = match.path.split('/')[1];
        return (
            <div>
                <Navigation title={title} />
                <div className="contaner">
                    <h2>Checkout</h2>
                    <label>Full name*</label>
                    <input type="text" placeholder="FullName" onChange={this.onChange} name="fullName" />
                    <label>Email*</label>
                    <input type="text" placeholder="Email" onChange={this.onChange} name="email" />
                    <label>Phone</label>
                    <input type="text" placeholder="Phone" onChange={this.onChange} name="phone" />
                    <label>Address</label>
                    <input type="text" placeholder="Address" onChange={this.onChange} name="address" />
                    <h3>TOTAL: {TOTAL} $</h3>
                    <button onClick={() => this.onSubmit(TOTAL)}>PLACE ORDER</button>
                    <br />
                    <span></span>
                </div>
            </div>
        );
    }
}

const mapDispatchTopProps = (dispatch, props) => {
    return {
        addCustomer: (customer) => {
            return dispatch(actAddCustomerRequest(customer))
        }
    }
}

export default connect(null, mapDispatchTopProps)(CheckOut);