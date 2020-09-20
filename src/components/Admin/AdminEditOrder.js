import React, { Component } from 'react';
import { actGetCustomerByIDRequest, actEditCustomerRequest } from '../../action/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AdminEditOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: null,
            email: null,
            fullName: null,
            phone: null,
            total: null
        }
    }

    componentDidMount = () => {
        let id = this.props.match.params.id;
        return this.props.getCustomerByID(id)
    }

    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        return this.setState({
            [name]: value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault()
        let inputAddress = document.querySelector('#address');
        let inputEmail = document.querySelector('#email');
        let inputFullName = document.querySelector('#fullName');
        let inputPhone = document.querySelector('#phone');
        let inputTotal = document.querySelector('#total');
        await this.setState({
            address: inputAddress.value,
            email: inputEmail.value,
            fullName: inputFullName.value,
            phone: inputPhone.value,
            total: inputTotal.value
        })
        let id = this.props.match.params.id;
        let { address, email, fullName, phone, total } = this.state;
        await this.props.editCustomer({
            address,
            email,
            fullName,
            phone,
            total
        }, id)
        return this.props.history.push('/admin/orders')
    }

    render() {
        let { address, email, fullName, total, phone } = this.state;
        let { customer } = this.props
        let token = localStorage.getItem('token');
        let isAdmin = token ? token.split(' ')[1] : false
        if (!isAdmin || isAdmin === 'false') {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <h4>Edit Orders</h4>

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form>
                            <div className="form-group">
                                <label>Full Name:</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Full Name"
                                    required
                                    onChange={this.onChange}
                                    name="fullName"
                                    id="fullName"
                                    value={fullName ? fullName : (customer ? customer.fullName : '')}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                    onChange={this.onChange}
                                    name="email"
                                    id="email"
                                    value={email ? email : (customer ? customer.email : '')}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Phone:</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    required
                                    onChange={this.onChange}
                                    name="phone"
                                    id="phone"
                                    value={phone ? phone : (customer ? customer.phone : '')}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Address:</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    required
                                    onChange={this.onChange}
                                    name="address"
                                    id="address"
                                    value={address ? address : (customer ? customer.address : '')}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Total:</label>
                                <input type="number"
                                    className="form-control"
                                    placeholder="Total"
                                    required
                                    onChange={this.onChange}
                                    name="total"
                                    id="total"
                                    value={total ? total : (customer ? customer.total : '')}
                                >
                                </input>
                            </div>

                            <button type="submit" className="btn btn-primary"
                                onClick={this.onSubmit}
                            >Lưu lại</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        customer: state.customer
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getCustomerByID: id => {
            return dispatch(actGetCustomerByIDRequest(id))
        },
        editCustomer: (customer, id) => {
            return dispatch(actEditCustomerRequest(customer, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditOrder);