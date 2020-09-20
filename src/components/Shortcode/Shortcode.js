import React, { Component } from 'react';
import Navigation from '../Navigation';

class Shortcode extends Component {
    render() {
        let { match } = this.props
        let title = match.path.split('/')[1]
        return (
            <div>
                <Navigation title={title} />
                <div style={{
                    width: 'auto',
                    margin: '100px',
                    marginTop: '20px',
                    fontFamily: 'Times New Roman, Times, serif',
                    fontSize: '17px',
                    lineHeight: '1.7',
                    color: '#212536'
                }}>
                    <div style={{ width: '100%' }}>
                        <p style={{ float: 'left', marginRight: '40px', width: '30%' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Voluptatibus aut officiis magnam adipisci
                            animi
                            laudantium molestiae tempora, illo iure placeat quaerat error atque temporibus, doloribus, nihil ipsam
                            rem
                            ducimus quidem. Perspiciatis mollitia porro, maiores.
            </p>
                        <p style={{ float: 'left', width: '30%', marginRight: '40px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aut officiis magnam adipisci
                            animi
                            laudantium molestiae tempora, illo iure placeat quaerat error atque temporibus, doloribus, nihil ipsam
                            rem
                            ducimus quidem. Perspiciatis mollitia porro, maiores.
            </p>
                        <p style={{ float: 'left', width: '30%', paddingRight: '20px', marginBottom: '50px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aut officiis magnam adipisci
                            animi
                            laudantium molestiae tempora, illo iure placeat quaerat error atque temporibus, doloribus, nihil ipsam
                            rem
                            ducimus quidem. Perspiciatis mollitia porro, maiores..
            </p>
                    </div>

                    <p style={{ marginTop: '50px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ipsum magnam cum quam, aliquid
                        expedita
                        est reiciendis voluptate quibusdam voluptas saepe ad tempore nobis. Eos odio, rem quia atque aspernatur est
                        corrupti numquam aliquid unde recusandae ex, consequuntur, repellendus consequatur nihil ad! Incidunt
                        provident
                        nihil possimus mollitia perspiciatis at quos.
        </p>

                    <p style={{ marginTop: '50px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ipsum magnam cum quam, aliquid
                        expedita
                        est reiciendis voluptate quibusdam voluptas saepe ad tempore nobis. Eos odio, rem quia atque aspernatur est
                        corrupti numquam aliquid unde recusandae ex, consequuntur, repellendus consequatur nihil ad! Incidunt
                        provident
                        nihil possimus mollitia perspiciatis at quos.
        </p>
                </div>
            </div>
        );
    }
}

export default Shortcode;
