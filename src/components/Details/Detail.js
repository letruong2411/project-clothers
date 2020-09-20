import React, { Component } from 'react';
import './detail.css'
import Navigation from '../Navigation';
import { actGetProductByIDRequest, actAddToCart } from './../../action/index';
import { connect } from 'react-redux';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    componentDidMount = () => {
        let id = this.props.match.params.id;
        this.props.getProductByID(id)
    }

    onDown = (quantity) => {
        if (quantity <= 1) return
        this.setState({
            quantity: quantity - 1
        })
    }
    onUp = (quantity) => {
        if (quantity >= this.props.product.quantity) return
        this.setState({
            quantity: quantity + 1
        })
    }

    onAddToCart = (product, quantity) => {
        this.props.addToCart(product, quantity)
        alert('Add to cart success')
        return window.location.reload()
    }

    render() {
        let { match } = this.props;
        let title = match.path.split('/')[1];
        let products = this.props.product;
        let product = products.length > 0 ? products[0] : [];
        let quantity = this.state.quantity;
        return (
            <div>
                <Navigation title={title} />
                <div className="noidung-details">
                    <img src={product.image} alt="" />
                    <div>
                        <h3>{product.nameProduct}</h3>
                        <p>Size:
                <input className="listsize" list="allsize" name="size" />
                            <datalist id="allsize">
                                <option value="S" />
                                <option value="M" />
                                <option value="L" />
                                <option value="XL" />
                            </datalist>
                        </p>
                        <p>Quantity :
                <button type="button" className="btn btn-warning"
                                onClick={() => this.onDown(quantity)}
                            >-</button>
                            <span>{quantity}</span>
                            <button type="button" className="btn btn-warning"
                                onClick={() => this.onUp(quantity)}
                            >+</button>
                        </p>
                        <p>Price : $ <strong>{String(product.price * quantity)}</strong> </p>
                        <button className="add-to-cart"
                            style={{ color: 'yellow', cursor: 'pointer' }}
                            onClick={() => this.onAddToCart(product, quantity)}
                        >ADD TO CART</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProductByID: (id) => {
            return dispatch(actGetProductByIDRequest(id))
        },
        addToCart: (product, quantity) => {
            return dispatch(actAddToCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);