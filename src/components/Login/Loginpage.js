import React, { Component } from 'react';
import './login.css'
import { connect } from 'react-redux'
import { getAllUsersAPI } from './../../action/index'
import { Link } from 'react-router-dom'

class Loginpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onLogin = this.onLogin.bind(this)
    }
    componentDidMount() {
        this.props.fetchAllUsers();
    }
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    onLogin(e) {
        e.preventDefault();
        let { username, password } = this.state;
        let { users } = this.props;
        let check = users.find(user => user.username === username
            && user.password === password
        )
        if (check) {
            let token = check.username + ' ' + check.isAdmin
            localStorage.setItem('token', token)
            return window.location.href = '/';
        }
        return alert('Incorrect Username or Password')
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
                            <input type="password" id="password" className="fadeIn third zero-raduis"
                                name="password" placeholder="password"
                                onChange={this.onChange}
                            />
                            <div id="formFooter">
                                <a className="underlineHover" href="/#">Forgot Password?</a>
                            </div>
                            <input type="submit" className="fadeIn fourth zero-raduis" value="login"
                                onClick={this.onLogin}
                            />
                            <h2>You don't have a account ?</h2>
                            <Link to="/register"
                                className="fadeIn fourth zero-raduis pc register"
                                style={{ textDecoration: 'none' }}
                            >Register
                            </Link>
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
        fetchAllUsers: () => {
            return dispatch(getAllUsersAPI())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);
