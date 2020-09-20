import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { addNewUserToAPI, getAllUsersAPI } from '../../action/index'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            re_password: ''
        }
    }

    componentDidMount = () => {
        this.props.getAllUsers();
    }

    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    onRegister = async (e) => {
        e.preventDefault();
        let { username, password, re_password } = this.state;
        let { users } = this.props
        if (password === re_password) {
            let check = await users.find(user => username === user.username);
            if (!check) {
                await this.props.registerUser({
                    username: username,
                    password: password,
                    isAdmin: false
                })
                return window.location.href = "/login"
            }
            return alert('Tên tài khoản đã được sử dụng')
        }
        return alert('Mật khẩu không khớp')
    }

    render() {
        return (
            <div>
                <div className="wrapper fadeInDown zero-raduis">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <h2 className="my-5">Sign In</h2>
                        </div>

                        <form>
                            <input type="text" id="username" className="fadeIn second zero-raduis"
                                name="username" placeholder="username"
                                onChange={this.onChange}
                            />
                            <input type="password" className="fadeIn third zero-raduis"
                                name="password" placeholder="password"
                                onChange={this.onChange}
                            />
                            <input type="password" className="fadeIn third zero-raduis"
                                name="re_password" placeholder="re-password"
                                onChange={this.onChange}
                            />
                            <input type="submit" className="fadeIn fourth zero-raduis" value="Register"
                                onClick={this.onRegister}
                            />
                            <h2>You have a account ?</h2>

                        </form>


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
const mapDispatchToProps = (dispatch, props) => {
    return {
        registerUser: (user) => {
            return dispatch(addNewUserToAPI(user))
        },
        getAllUsers: () => {
            return dispatch(getAllUsersAPI())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
