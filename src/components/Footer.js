import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-component">
                <div className="truoc-footer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img-khac/13.jpg)` }}>
                    <div className="noidung-trc">
                        <h2>GET IN TOUCH</h2>
                        <input type="text" placeholder="Your name here..." />
                        <input type="text" placeholder="Your email here..." />
                        <textarea placeholder="Your message here..."></textarea>
                        <button>SEND</button>
                    </div>
                </div>
                <div className="footer">
                    <div className="noidung-footer">
                        <h3>CONTACT</h3>
                        <ul>
                            <li>Cs Nesthome, Block III.1
                        <br />
                        Sơn Trà, Đà Nẵng
                    </li>
                            <li>
                                Telephone : +012 345 678 102
                        <br />
                        Telephone : +032 225 501 172
                    </li>
                            <li>
                                Gmail : lee2411xx@gmail.com
                        <br />
                        Web : www.letruong.com
                    </li>
                        </ul>
                    </div>
                    <div className="noidung-footer">
                        <h3>COMPANY</h3>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Our blog</li>
                            <li>Supports center</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className="noidung-footer">
                        <h3>SUPPORT</h3>
                        <ul>
                            <li>Delivery information</li>
                            <li>Order tracking</li>
                            <li>Return product</li>
                            <li>Gift card</li>
                            <li>Home delivery</li>
                            <li>Online support</li>
                        </ul>
                    </div>
                    <div className="noidung-footer">
                        <h3>INFORMATION</h3>
                        <ul>
                            <li>Payment option</li>
                            <li>Shipping</li>
                            <li>Checkout</li>
                            <li>Discount</li>
                            <li>Sitemap</li>
                            <li>Service</li>
                        </ul>
                    </div>
                </div>
                <div className="end">
                    <div className="noidung-end nd1">
                        Copyright @ 2020 <a href="/#">Lê Trương</a>. All right reserved.
            </div>
                    <div className="noidung-end nd2">
                        <a href="/#">Site Map</a>
                        <a href="/#">Contact Us</a>
                        <a href="/#">Wish List</a>
                        <a href="/#">Newsletter</a>
                    </div>
                    <div className="noidung-end ">
                        <img src={process.env.PUBLIC_URL + '/img-khac/11.png'} alt=""></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
