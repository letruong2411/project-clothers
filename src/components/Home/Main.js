import React, { Component } from 'react';
import Left from './Left';
import ListProduct from './ListProduct';

class Main extends Component {
    render() {
        return (
            <div className="noidung">
                <Left />
                <ListProduct />
            </div>
        );
    }
}

export default Main;
