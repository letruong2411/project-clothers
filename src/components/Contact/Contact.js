import React, { Component } from 'react';
import Navigation from '../Navigation';
import './contact.css';

class Contact extends Component {
    render() {
        let { match } = this.props
        let title = match.path.split('/')[1]
        return (
            <div>
                <Navigation title={title} />
                <div className="noidung-contact">
                    <h3>Leave a message</h3>
                    <label>Your name*</label> <hr />
                    <input type="text" placeholder="Name" />
                    <label>Email*</label> <hr />
                    <input type="text" placeholder="Email" />
                    <label>Phone</label> <hr />
                    <input type="number" placeholder="Phone" />
                    <label>Subject</label> <hr />
                    <input type="text" placeholder="Subject" />
                    <label>Message*</label> <hr />
                    <textarea placeholder="Write Something"> </textarea>
                    <button> <a href="/#"> SEND MESSAGE </a> </button>
                </div>
            </div>
        );
    }
}

export default Contact;
