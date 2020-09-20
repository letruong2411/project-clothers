import React, { Component } from 'react';
import {
    actGetProductByIDRequest,
    actEditProductRequest
} from '../../action/index';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class AdminEditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameProduct: null,
            size: null,
            quantity: null,
            price: null,
            image: null,
            property: false,
            hot: false,
            new: false,
            sale: false
        }
    }

    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        return this.setState({
            [name]: value
        })
    }

    onClick = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        return this.setState({
            [name]: value
        })
    }

    componentDidMount = () => {
        let id = this.props.match.params.id;
        return this.props.getProductByID(id)
    }

    onSubmit = async (e) => {
        e.preventDefault()
        let inputNameProduct = document.querySelector('#nameProduct');
        let inputSize = document.querySelector('#size');
        let inputQuantity = document.querySelector('#quantity');
        let inputPrice = document.querySelector('#price');
        let inputImage = document.querySelector('#image');
        await this.setState({
            nameProduct: inputNameProduct.value,
            size: inputSize.value,
            quantity: inputQuantity.value,
            price: inputPrice.value,
            image: inputImage.value
        })
        let id = await this.props.match.params.id;
        let { nameProduct, size, quantity, price, image } = this.state
        await this.props.editProduct({
            nameProduct,
            size,
            quantity,
            price,
            image,
            property: this.state.property,
            hot: this.state.hot,
            new: this.state.new,
            sale: this.state.sale
        }, id);
        return this.props.history.push('/admin/products')
    }

    render() {
        let { nameProduct, size, quantity, price, image } = this.state;
        let { product } = this.props
        let token = localStorage.getItem('token');
        let isAdmin = token ? token.split(' ')[1] : false
        if (!isAdmin || isAdmin === 'false') {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="container">
                    <h4>Edit Product</h4>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form>
                                <div className="form-group">
                                    <label>Name Product:</label>
                                    <input type="text"
                                        className="form-control"
                                        id="nameProduct"
                                        placeholder="Name Product"
                                        required
                                        onChange={this.onChange}
                                        name="nameProduct"
                                        value={nameProduct ? nameProduct : (product[0] ? product[0].nameProduct : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Size:</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Size"
                                        required
                                        onChange={this.onChange}
                                        name="size"
                                        id="size"
                                        value={size ? size : (product[0] ? product[0].size : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Quantity:</label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Size"
                                        required
                                        onChange={this.onChange}
                                        name="quantity"
                                        id="quantity"
                                        value={quantity ? quantity : (product[0] ? product[0].quantity : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Price"
                                        required
                                        onChange={this.onChange}
                                        name="price"
                                        id="price"
                                        value={price ? price : (product[0] ? product[0].price : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Image (Link):</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Image Link"
                                        required
                                        onChange={this.onChange}
                                        name="image"
                                        id="image"
                                        value={image ? image : (product[0] ? product[0].image : '')}
                                    >
                                    </input>
                                </div>
                                <div className="form-group">

                                    <div className="row">
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <label>Property:</label>
                                            <input type="checkbox"
                                                className="form-control"
                                                onClick={this.onClick}
                                                name="property"
                                            >
                                            </input>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <label>Hot:</label>
                                            <input type="checkbox"
                                                className="form-control"
                                                onClick={this.onClick}
                                                name="hot"
                                            >
                                            </input>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <label>New:</label>
                                            <input type="checkbox"
                                                className="form-control"
                                                onClick={this.onClick}
                                                name="new"
                                            >
                                            </input>
                                        </div>
                                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                            <label>Sale:</label>
                                            <input type="checkbox"
                                                className="form-control"
                                                onClick={this.onClick}
                                                name="sale"
                                            >
                                            </input>
                                        </div>
                                    </div>

                                </div>
                                <button type="submit" className="btn btn-primary"
                                    onClick={this.onSubmit}
                                >Lưu lại</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getProductByID: (id) => {
            return dispatch(actGetProductByIDRequest(id))
        },
        editProduct: (product, id) => {
            return dispatch(actEditProductRequest(product, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditProduct);