import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="top-tren">
                    <div className="noidungtop">
                        <Link to="/"><img src={process.env.PUBLIC_URL + '/img-khac/1.png'} alt=""></img></Link>
                    </div>
                    <div className="noidungtop">
                        <p>
                            <b> +84967827807 </b>
                            <br></br>
                            We are open 9 am - 10pm
                </p>
                    </div>
                    <div className="noidungtop">
                        <p>
                            <b> lee2411xx@gmail.com </b>
                            <br></br>
                            You can mail us
                </p>
                    </div>
                    <div className="noidungtop">
                        <img src={process.env.PUBLIC_URL + '/img-khac/search.png'} alt=""></img>
                        <input placeholder="Search"></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
