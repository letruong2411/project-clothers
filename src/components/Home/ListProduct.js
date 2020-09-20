import React, { Component } from 'react';
import ItemProduct from './ItemProduct';
import { actGetAllProductRequest } from '../../action/index';
import { connect } from 'react-redux';

class ListProduct extends Component {
    componentDidMount = () => {
        this.props.getAllProduct()
    }
    showAllProduct = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ItemProduct key={index}
                    product={product}
                />
            })
        }
        return result;
    }
    render() {
        let { products } = this.props
        return (
            <div className="chia-noidung-products">
                <div className="container">
                    <div className="row">
                        {this.showAllProduct(products)}
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
        getAllProduct: () => {
            dispatch(actGetAllProductRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
