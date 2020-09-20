import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ItemProduct extends Component {

    render() {
        let { product } = this.props
        return (
            <div className="col-xs-4 col-sm-3 col-md-3 col-lg-3" style={{ marginTop: '50px' }}>
                <Link className="products" to={`/detail/${product.id}`}>
                    <img src={product.image} alt=""></img>
                    <p>{product.price} $</p>
                    <h5 style={{ color: 'black', marginTop: '-10px' }}>{product.nameProduct}</h5>
                    {product.new ? <div className="them-new">NEW </div> : ''}
                    {product.hot ? <div className="them-sale-hot hot">HOT </div> : ''}
                    {product.sale ? <div className="them-sale-hot">SALE </div> : ''}
                </Link>
            </div>
        );
    }
}

export default ItemProduct;