import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        let { title } = this.props
        return (
            <div className="navigation-nav">
                <div className="phan-header">
                    <div className="noidung-header">
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/blog">blog</Link></li>
                            <li><Link to="/shop">shop</Link></li>
                            <li><Link to="/men">men</Link></li>
                            <li><Link to="/women">women</Link></li>
                            <li><Link to="/shortcode">shortcode</Link></li>
                            <li><Link to="/about">about us</Link></li>
                            <li><Link to="/contact">contact</Link></li>
                        </ul>
                    </div>
                    <h1>Shopfixe</h1>
                    <div className="noidung-them">
                        <a href="/#">Home</a>
                 >  {title.toUpperCase()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
