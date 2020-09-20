import React, { Component } from 'react';

class Left extends Component {
    render() {
        return (
            <div className="chia-noidung">
                <h4>Category</h4>
                <div>
                    <a href="/#"> Women's Collection (320)</a>
                    <a href="/#"> Men's Collection (275)</a>
                    <a href="/#"> Kid's Collection (275)</a>
                    <a href="/#">Accessories (220)</a>
                    <a href="/#">Bag's Collection (175)</a>
                    <a href="/#">Shoes Collection (150)</a>
                </div>
                <h4>Materials</h4>
                <div>
                    <a href="/#"> Cotton (180)</a>
                    <a href="/#">Cotton Blends (150)</a>
                    <a href="/#"> Lilen (120)</a>
                    <a href="/#">Polister Blends (175)</a>
                    <a href="/#">Jeans (150)</a>
                </div>
                <h4>Brands</h4>
                <div>
                    <a href="/#"> Zara (150)</a>
                    <a href="/#">Walmart (100)</a>
                    <a href="/#">Arong (150)</a>
                    <a href="/#">Velloci (120)</a>
                    <a href="/#">Dolce & Gabbana (175)</a>
                </div>
                <h4>Tacs</h4>
                <div>
                    <button>men</button>
                    <button>kid's</button>
                    <button>women</button>
                    <button>fashion</button>
                    <button>kid's</button>
                    <button>men</button>
                </div>
            </div>

        );
    }
}

export default Left;
