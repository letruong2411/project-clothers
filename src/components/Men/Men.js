import React, { Component } from 'react';
import Navigation from '../Navigation';

class Men extends Component {
    render() {
        let { match } = this.props
        let title = match.path.split('/')[1]
        return (
            <div>
                <Navigation title={title} />
            </div>
        );
    }
}

export default Men;
