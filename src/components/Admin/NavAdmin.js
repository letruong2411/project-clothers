import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavAdmin extends Component {
    render() {
        return (
            <div>

                <Link to="/admin/users" className="btn btn-info"
                    style={{ marginBottom: '30px' }}
                >User</Link>
                <Link to="/admin/products" className="btn btn-info"
                    style={{ marginLeft: '30px', marginRight: '30px', marginBottom: '30px' }}
                >Product</Link>
                <Link to="/admin/orders" className="btn btn-info"
                    style={{ marginBottom: '30px' }}
                >Order</Link>

            </div>
        );
    }
}

export default NavAdmin;