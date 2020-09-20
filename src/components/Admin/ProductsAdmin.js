import React, { Component } from 'react';
import NavAdmin from './NavAdmin';
import { actGetAllProductRequest, actDeleteProductRequest } from '../../action/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ProductsAdmin extends Component {

    componentDidMount = () => {
        this.props.getAllProducts()
    }

    showListProducts = () => {
        let result = <tr></tr>
        let { products } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.nameProduct}</td>
                    <td>{product.size}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>
                        <button type="button" className="btn btn-success"
                            onClick={() => this.onEdit(product.id)}
                        >Edit</button>
                        <button type="button" className="btn btn-primary"
                            onClick={() => this.onDelete(product.id)}
                        >Delete</button>
                    </td>
                </tr>
            })
        }
        return result;
    }

    onEdit = (id) => {
        return this.props.history.push(`products/edit/${id}`)
    }

    onDelete = async (id) => {
        this.props.deleteProduct(id)
    }

    onAddProduct = () => {
        return this.props.history.push('products/add')
    }

    render() {
        let token = localStorage.getItem('token');
        let isAdmin = token ? token.split(' ')[1] : false
        if (!isAdmin || isAdmin === 'false') {
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                <NavAdmin />
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Products Manager</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-warning"
                            onClick={this.onAddProduct}
                        >Add Product</button>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showListProducts()}
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllProducts: () => {
            dispatch(actGetAllProductRequest())
        },
        deleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAdmin);