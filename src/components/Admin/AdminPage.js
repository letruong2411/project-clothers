import React, { Component } from 'react';
import NavAdmin from './NavAdmin';
import { Redirect } from 'react-router-dom';

class AdminPage extends Component {
    render() {
        let token = localStorage.getItem('token');
        let isAdmin = token ? token.split(' ')[1] : false
        if (!isAdmin || isAdmin === 'false') {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <NavAdmin />
            </div>
        );
    }
}

export default AdminPage;