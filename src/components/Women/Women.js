import React, { Component } from 'react';
import Navigation from '../Navigation';

class Women extends Component {
    render() {
        let { match } = this.props
        let title = match.path.split('/')[1]
        return (
            <div>
                <Navigation title={title} />
                Women work
            </div>
        );
    }
}

export default Women;
