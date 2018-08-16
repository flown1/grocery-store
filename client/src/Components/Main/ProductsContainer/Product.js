import React from 'react';
import '../../../Styles/products/Product.css';
import { connect } from "react-redux";
import { addProduct, productQuantityIncrease, productQuantityDecrease } from "../../../Redux/actions/productActions";
import ProductShowcasePopUp from "./ProductShowcasePopUp";

class Product extends React.Component {

    constructor(){
        super();

        this.state = {
            popupShown: false
        };

        this.handlePopupClose = this.handlePopupClose.bind(this);
        this.handleBoxTopClick = this.handleBoxTopClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handlePlusButtonClick = this.handlePlusButtonClick.bind(this);
        this.handleMinusButtonClick = this.handleMinusButtonClick.bind(this);
    }
    handleButtonClick(){
        this.props.addNewProduct(this.props.product);
    }

    handleBoxTopClick() {
        this.setState({popupShown: true});
    }

    handleMinusButtonClick() {
        this.props.productQuantityDecrease(this.props.product);
    }

    handlePlusButtonClick() {
        this.props.productQuantityIncrease(this.props.product);
    }

    handlePopupClose() {
        this.setState({popupShown: false});
    }

    componentWillReceiveProps(){
        console.log("Product received new props: ", this.props);
    }

    render() {
        const popup = (this.state.popupShown? <ProductShowcasePopUp product={this.props.product} closePopup={this.handlePopupClose}/> : null);

        return (
            <div>
                {popup}
                <div className="product-box">
                    <div className="box-top">
                        <img src={this.props.product.imgUrl} className="product-picture" onClick={this.handleBoxTopClick}/>
                        <h2 className='product-name'>{this.props.product.name}</h2>
                    </div>
                    <hr/>
                    <div className="box-bottom">
                        <h3 className='product-price'>${this.props.product.price}<span className="product-units">/kg</span></h3>
                        <div className="product-quantity-picker-wrapper">
                            <div className="btn-main btn-grey btn-circle btn-xs" onClick={this.handleMinusButtonClick}>-</div>
                            <div>{this.props.product.quantity || "---"}</div>
                            <div className="btn-main btn-grey btn-circle btn-xs" onClick={this.handlePlusButtonClick}>+</div>
                        </div>
                        <div className="btn-main btn-red add-to-cart-btn" onClick={this.handleButtonClick}>Buy</div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewProduct: (product) => dispatch(addProduct(product)),
        productQuantityIncrease: (product) => dispatch(productQuantityIncrease(product)),
        productQuantityDecrease: (product) => dispatch(productQuantityDecrease(product))
    }
};
export default connect(null, mapDispatchToProps)(Product);