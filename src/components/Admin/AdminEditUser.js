import React, { Component } from 'react';
import {
    actGetUserByIDRequest,
    actEditUserRequest
} from '../../action/index'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class AdminEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            isAdmin: false
        }
    }

    componentDidMount = async () => {
        let id = this.props.match.params.id
        await this.props.getUserByID(id)
    }

    onChange = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        return this.setState({
            [name]: value
        })
    }

    onAddAdmin = () => {
        let checkbox = document.querySelector('#checkbox-isAdmin');
        return this.setState({
            isAdmin: checkbox.checked
        })
    }
    onSubmit = async (e) => {
        e.preventDefault()
        let inputUsername = await document.querySelector('#input-username');
        let inputPassword = await document.querySelector('#input-password');
        await this.setState({
            username: inputUsername.value,
            password: inputPassword.value
        })
        let id = this.props.match.params.id
        await this.props.editUser({
            username: this.state.username,
            password: this.state.password,
            isAdmin: this.state.isAdmin
        }, id);
        return this.props.history.push('/admin/users')
    }
    render() {
        let { username, password } = this.state;
        let { user } = this.props
        let token = localStorage.getItem('token');
        let isAdmin = token ? token.split(' ')[1] : false
        if (!isAdmin || isAdmin === 'false') {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="container">
                    <h4>Edit User</h4>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form>
                                <div className="form-group">
                                    <label>Username:</label>
                                    <input type="text"
                                        className="form-control" id="input-username"
                                        placeholder="Username"
                                        required
                                        onChange={this.onChange}
                                        name="username"
                                        value={username ? username : (user.username ? user.username : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="text"
                                        className="form-control" id="input-password"
                                        placeholder="Password"
                                        required
                                        onChange={this.onChange}
                                        name="password"
                                        value={password ? password : (user.password ? user.password : '')}
                                    >
                                    </input>
                                </div>

                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"
                                            id="checkbox-isAdmin"
                                            onClick={this.onAddAdmin} />
                                        isAdmin
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary"
                                    onClick={this.onSubmit}
                                >Lưu lại</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getUserByID: (id) => {
            return dispatch(actGetUserByIDRequest(id))
        },
        editUser: (user, id) => {
            return dispatch(actEditUserRequest(user, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditUser);