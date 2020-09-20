import React, { Component } from 'react';
import NavAdmin from './NavAdmin';
import { getAllUsersAPI, actDeleteUserRequest } from '../../action/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class UserAdmin extends Component {

    componentDidMount = () => {
        this.props.getAllUser();
    }

    showListUser = () => {
        let result = <tr></tr>
        let { users } = this.props
        if (users.length >= 1) {
            result = users.map((user, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td>{user.isAdmin.toString()}</td>
                    <td>
                        <button type="button" className="btn btn-success"
                            onClick={() => this.onEdit(user.id)}
                        >Edit</button>
                        <button type="button" className="btn btn-primary"
                            onClick={() => this.onDelete(user.id)}
                        >Delete</button>
                    </td>
                </tr>
            })
        }
        return result
    }

    onEdit = (id) => {
        if (id === 1) {
            return alert('Can not edit Admin');
        }
        return this.props.history.push(`users/edit/${id}`)
    }

    onDelete = (id) => {
        if (id === 1) {
            return alert('Can not delete Admin')
        }
        return this.props.deleteUser(id)
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
                        <h3 className="panel-title">Users Manager</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>IsAdmin</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showListUser()}
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
        users: state.users
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        getAllUser: () => {
            dispatch(getAllUsersAPI())
        },
        deleteUser: (id) => {
            dispatch(actDeleteUserRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(UserAdmin);