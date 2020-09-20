import React, { Component } from 'react';
import NavAdmin from './NavAdmin';
import { actGetAllCustomerRequest, actDeleteCustomerRequest } from '../../action/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Orders extends Component {

    componentDidMount = () => {
        return this.props.getAllOrder()
    }

    showAllOrders = () => {
        let result = <tr></tr>
        let { customer } = this.props;
        if (customer.length > 0) {
            result = customer.map((order, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{order.fullName}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{order.address}</td>
                    <td>{order.total}</td>
                    <td>
                        <button type="button" className="btn btn-success"
                            onClick={() => this.onEdit(order.id)}
                        >Edit</button>
                        <button type="button" className="btn btn-primary"
                            onClick={() => this.onDelete(order.id)}
                        >Delete</button>
                    </td>
                </tr>
            })
        }
        return result;
    }

    onDelete = (id) => {
        return this.props.deleteOrder(id)
    }
    onEdit = (id) => {
        return this.props.history.push(`orders/edit/${id}`)
    }
    render() {
        let token = localStorage.getItem('token');
        let isAdmin = token ? token.split(' ')[1] : false
        if (!isAdmin || isAdmin === 'false') {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <NavAdmin />
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Orders Manager</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showAllOrders()}
                            </tbody>
                        </table>

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
        getAllOrder: () => {
            dispatch(actGetAllCustomerRequest())
        },
        deleteOrder: (id) => {
            dispatch(actDeleteCustomerRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);