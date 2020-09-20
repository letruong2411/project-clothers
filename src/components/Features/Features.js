import React, { Component } from 'react';
import Navigation from '../Navigation';

class Features extends Component {
    render() {
        let { match } = this.props
        let title = match.path.split('/')[1]
        return (
            <div>
                <Navigation title={title} />
                <div style={{
                    margin: '10px 100px',
                    fontFamily: 'Times New Roman, Times, serif',
                    fontSize: '17px', lineHeight: '1.7',
                    color: '#212536'
                }}>
                    <h1 style={{ fontSize: '45px' }}>
                        The classic “revival” inspiration blew a new wind into the trend of autumn-winter
                        accessories 2020
    </h1>
                    <p>While the bags tend to get smaller and smaller, the longer the earring accessory gets more and more of the
                    fashionistas in this Fall-Winter 2019 season.
    </p>
                    <p>
                        This year's autumn-winter fashion style is a contrasting story between minimalist, classic suits and gorgeous
                        dress designs and evening gowns. Because of this, accessory trends also carry two clear spirits: elegant and
                        luxurious.
    </p>
                    <img src="img-blog/1.jpg" alt='' />
                    <p style={{ marginLeft: '50px' }}>
                        Here are 5 accessory trends that are expected to "cause waves" in the "addicted" fashion community.</p>
                    <h4>Long earrings are back and dangerous than before</h4>
                    <p>These girls love this style will become one of the brightest candidates for the "queen" in the fashion industry
        this year.</p>
                    <img src="img-blog/2.jpg" alt='' />
                    <p style={{ marginLeft: '50px', textAlign: 'center' }}>No longer a "tricky" accessory and is
                    defaulted only for formal
                    occasions,
                    the long
                    earrings autumn and winter
        version 2019 can accompany many fashion styles.</p>
                    <p>Prabal Gurung fashion house made an impression with long pearl earrings fringed with tassels ... elbows.
                    Meanwhile, although most Louis Vuitton accessories are not too "massive", it is impossible not to mention a few
        types of feather earrings that reach the shoulders, creating a special highlight for the outfit.</p>
                    <h4>Cross-div bag from the 70s "revival"</h4>
                    <p>The famous cross-shoulder or shoulder bag from the 70s comes back in a whole new look.</p>
                    <img src="img-blog/3.jpg" alt='' />
                    <p style={{ marginLeft: '50px', textAlign: 'center' }}>The beautiful, convenient small bag designs
                    that captured the hearts of the French upper class in the 1975s once
        again "dominated" the fashion charts of modern ladies.</p>
                    <p>Prominent on the catwalks of Givenchy, Valentino, Louis Vuitton, ... these bright items promise to be "hunted"
        relentlessly this year.</p>
                    <img src="img-blog/4.jpg" alt='' />
                    <p style={{ marginLeft: '50px', textAlign: 'center' }}>From left to right: Givenchy, Valentiano,
        Louis Vuitton</p>
                    <h4>Belts from the 80s - Creative highlight</h4>
                    <p>In the fall and winter of 2019, fashion houses tend to look back to the past and the accessory was very popular
        in the 80s - the belt was enthusiastically promoted.</p>
                    <img src="img-blog/5.jpg" alt='' />
                    <p style={{ marginLeft: '50px', textAlign: 'center' }}>Streetwear "play quality" like this will "
                    blow away" the fading anxiety between the crowd of every urban girl.
    </p>
                    <p>From the subtle accent on the trench coat of Bottega Veneta, the cocktail dress of Versace to the bold suede
                    detail on the shorts design of Saint Laurent. All of them have helped the belt change spectacularly and have an
        interesting innovation.</p>
                    <img src="img-blog/6.jpg" alt='' />
                    <p style={{ marginLeft: '50px', textAlign: 'center' }}>From left to right: Bottega Veneta, Saint
        Laurent, Isabel Marant</p>
                    <h4>Square toe shoes everywhere</h4>
                    <p>While the spring-summer season of 2019 witnessed the rise of the pointy shoes, this fall, fashionists tried to
        revive the square toe shoes with the classic breath of the 90s.</p>
                    <img src="img-blog/7.jpg" alt='' />
                    <img src="img-blog/8.jpg" alt='' />
                    <p style={{ marginLeft: '50px', textAlign: 'center' }}>In the striking dark colors, she can mix &
        match this item with dynamic outfit or gentle outfit.</p>
                    <p>Bottega Veneta's "lightweight" square toe sandals design will be a "delicious" pair of luxurious wide-legged
        pants. Balenciaga, Kenzo, Tom Ford, ... do not miss this trendy item with very different transformations.</p>
                    <img src="img-blog/9.jpg" alt='' />
                    <p style={{ marginLeft: '50px', textAlign: 'center' }}>From left to right: Erdem, Kenzo, Tom Ford
    </p>
                    <h4>Variations with fashion hat accessories</h4>
                    <p>Appearing in the new collection of high-end brands, fashion hats - the "cool" streetstyle accessory breaks out
        from the familiar image and is raised to a new level.</p>
                    <img src="img-blog/10.jpg" alt='' />
                    <p style={{ marginLeft: '50px', textAlign: 'center' }}>Wearing a hat and posing "muse" like this,
        fans could not help but like.</p>
                    <p>Fashion houses Dior, Marc Jacobs, Michael Kors, ... add soft feather details, mesh, lace to the unique shape of
        hat shape, creating a variety of fashionistas to mix & match their style favourite.</p>
                    <img src="img-blog/11.jpg" alt='' />
                    <p style={{ marginLeft: '50px', textAlign: 'center' }}>From left to right: Dior, Marc Jacobs, Louis
        Vuitton</p>
                </div>
            </div>
        );
    }
}

export default Features;
