import React, { Component } from 'react';
import Navigation from '../Navigation';
import './about.css';

class About extends Component {
    render() {
        let { match } = this.props
        let title = match.path.split('/')[1]
        return (
            <div>
                <Navigation title={title} />
                <div className="noidung-about">
                    <img src="img-khac/13.jpg" alt="" />
                    <h3>Welcome To Shofixe Store</h3>
                    <p>Sodales sed cumque sem, torquent. Alias assumenda assumenda, massa unde nam occaecati hendrerit,
                    justo incidunt habitasse incidunt sed? Suscipit, blandit porro ligula sequi, ac felis do vel,
                    felis, integer ligula! Adipisci imperdiet donec, massa aliquip tempore integer modi congue,
                    recusandae proin optio ea sunt volutpat similique ea dolor magnam, irure?
                    Pulvinar justo! At primis, quos penatibus taciti proin.
                    Vivamus ullamco curae temporibus eaque mi lectus excepturi,
                    error consectetuer facilis proident eros repellendus error suspendisse malesuada?
                    Fringilla, iste suspendisse eros penatibus. Luctus exercitation mattis penatibus!
                    Quos veritatis quam tellus exercitationem ultrices,
                    nonummy eos luctus. Dolore sunt volutpat! Excepteur molestie quas unde
        </p>
                    <p>Imperdiet morbi, officiis sociosqu pariatur numquam doloribus perspiciatis potenti expedita
                    delectus vitae volutpat cursus voluptatem voluptate nibh litora, assumenda minim cras,
                    aliquid tristique accumsan asperiores nec. Tenetur, hymenaeos perspiciatis voluptates
                    sagittis consectetur! Sed deserunt minim cillum maiores sagittis, esse perferendis,
                    quos pariatur! Quia! At optio nam blandit, facere.
        </p>
                    <div className="designer">
                        <div>
                            <h2>Designer : </h2>
                    FullName :Trương Lê
                    <hr />
                    Age : 20
                    <hr />
                    Class : 17CNTT3
            </div>
                        <img src="img-khac/LêTrương.jpg" alt="" />
                    </div>

                </div>
            </div>
        );
    }
}

export default About;
