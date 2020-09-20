import React, { Component } from 'react';
import { actAddProductRequest } from '../../action/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AdminAddProduct extends Component {
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
    onSubmit = async (e) => {
        e.preventDefault();
        let { nameProduct, size, quantity, price, image, property,
            hot, news, sale } = this.state;
        if (nameProduct && size && quantity && price && image) {
            await this.props.addProduct({
                nameProduct,
                size,
                quantity,
                price,
                image,
                property,
                hot,
                news,
                sale
            })
            await alert('Success');
            return this.props.history.push('/admin/products')
        }
        return alert('Vui lòng điền đầy đủ thông tin')
    }

    render() {
        let token = localStorage.getItem('token');
        let isAdmin = token ? token.split(' ')[1] : false
        if (!isAdmin || isAdmin === 'false') {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="container">
                    <h4>Add Product</h4>

                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <form>
                                <div className="form-group">
                                    <label>Name Product:</label>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Name Product"
                                        required
                                        onChange={this.onChange}
                                        name="nameProduct"
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
                                    >
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Quantity:</label>
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Quantity"
                                        required
                                        onChange={this.onChange}
                                        name="quantity"
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
        addProduct: (product) => {
            return dispatch(actAddProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddProduct);