import React, { Component } from 'react';
import Main from './Main';
import Thuonghieu from './Thuonghieu';
import Navigation from '../Navigation';

class Home extends Component {
    render() {
        let { match } = this.props
        let title = match.path.split('/')[1]
        return (
            <div>
                <Navigation title={title} />
                <Main />
                <Thuonghieu />
            </div>
        );
    }
}

export default Home;
