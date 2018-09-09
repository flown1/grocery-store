import React from "react";
import "../../../Styles/Checkout/CheckoutPopUp.css";
import {connect} from "react-redux";
import * as ApiFetcher from "../../../Utils/ApiFetcher";
import {addProduct, clearCart} from "../../../Redux/actions/productActions";

class CheckoutPopUp extends React.Component {

    handleOnClickConfirm = (e) => {
        e.preventDefault();
        console.log("Confirm...");
        const userInfo = this.props.userInfo;
        const cart = this.props.cart;

        ApiFetcher.addOrder({userInfo, cart}, (data) => {
           if(data.status === 201) {
               console.log("Order placed successfully");
               this.props.closePopup();
               this.props.clearCart();
           } else {
               console.log("Unexpected error");
           }
        });
    };

    render(){
        const orderAddressInfo = <div className="userInfo-wrapper">
            <div>{this.props.userInfo.firstName} {this.props.userInfo.lastName}</div>
            <div>{this.props.userInfo.address}</div>
            <div>{this.props.userInfo.zipCode} {this.props.userInfo.city}</div>
        </div>;

        return(
            <div className="popup-box-content">
                {orderAddressInfo}
                <div className="btn btn-main btn-md btn-red" onClick={this.handleOnClickConfirm}>Confirm</div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    userInfo: state.userReducer.userInfo,
    cart: state.productsReducer.cart
});

const mapDispatchToProps = dispatch => {
    return {
        clearCart: () => dispatch(clearCart())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPopUp);