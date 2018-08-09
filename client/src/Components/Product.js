import React from 'react';
import '../Styles/products/Product.css';
import {connect} from "react-redux";
import {addProduct} from "../Redux/actions/productActions";

class Product extends React.Component {

    constructor(){
        super();
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(){
        this.props.addNewProduct(this.props.product);
    }

    render() {
        return (
            <div className="product-box">
                <div className="box-top">
                    <img src={this.props.product.imgUrl} className="product-picture"/>
                    <h2 className='product-name'>{this.props.product.name}</h2>
                </div>
                <hr/>
                <div className="product-bottom">
                    <h3 className='product-price'>${this.props.product.price}</h3>
                    <div className="product-quantity-picker-wrapper">
                        <div className="btn-main btn-grey btn-circle btn-xs" onClick={this.handleMinusButtonClick}>-</div>
                        <input className="product-quantity-inputbox" value={this.props.product.quantity} />
                        <div className="btn-main btn-grey btn-circle btn-xs" onClick={this.handlePlusButtonClick}>+</div>
                    </div>
                    <div className="btn-main btn-red add-to-cart-btn" onClick={this.handleButtonClick}>Buy</div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {addNewProduct: (product) => dispatch(addProduct(product))}
}
export default connect(null, mapDispatchToProps)(Product);