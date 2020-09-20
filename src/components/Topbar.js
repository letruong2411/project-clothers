import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const onLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/'
}

function CheckLogout() {
    return (
        <div style={{ float: 'right' }}>
            <button type="button" className="btn btn-primary"
                onClick={onLogout}
            >Logout
            </button>
        </div>
    )
}

class Topbar extends Component {
    render() {
        let token = localStorage.getItem('token');
        let data = localStorage.getItem('cart');
        let listCartItem = data ? JSON.parse(data) : [];
        let quantityCart = listCartItem ? listCartItem.length : null;
        return (
            <div className="top-bar">
                <div className="container">
                    <div className="left">
                        <a href="/#">My Account</a>
                        <a href="/#">USD</a>
                    </div>
                    <div className="center">
                        <a href="/https://www.facebook.com/TruongLe2411"><i className="fab fa-facebook"></i></a>
                        <a href="/https://www.instargram.com"><i className="fab fa-instagram-square"></i></a>
                        <a href="/https://www.google.com"><i className="fab fa-google-plus"></i></a>
                    </div>
                    <div className="right" style={{ color: '#DEE1E6' }}>
                        <i className="fas fa-user-circle" style={{ marginRight: '7px' }}></i>
                        {token ? token.split(' ')[0] : <a href="/login">Login or Regiter</a>}
                        {token ? <CheckLogout /> : null}
                        <Link to="/cart">Cart({quantityCart})</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;
