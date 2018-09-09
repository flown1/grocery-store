import React from "react";
import '../../../Styles/navbar/CartDropdownList.css';
import DropdownListItem from "./DropdownListItem";
import CheckoutPopUp from "../../Main/Checkout/CheckoutPopUp";
import {connect} from "react-redux";

class DropdownList extends React.Component{
    state = {
        showCheckoutPopUp: false,
        msg: ''
    };

    handleOnClickCheckout = (e) => {
        e.preventDefault();
        this.openPopUp();
    };

    openPopUp = () => {
        this.setState({...this.state, msg: '', showCheckoutPopUp: true});
    };

    handlePopupClose = () => {
      this.setState({...this.state, msg: 'Order successfully made!', showCheckoutPopUp : false});
    };

    render() {
        const checkoutButton = this.props.isLoggedIn
            ? <div className="btn btn-main btn-red" onClick={this.handleOnClickCheckout}>Checkout</div>
            : null;

        const checkoutPopUp = this.state.showCheckoutPopUp
            ? <CheckoutPopUp closePopup={this.handlePopupClose}/>
            : <div className="dropdown-list-fixed">
                Total: ${this.props.total}
                {checkoutButton}
            </div>;

        const displayTitleCheckout = this.state.showCheckoutPopUp? <h3>Checkout</h3> : null
        return (
            <div className={this.props.showDropdown? "dropdown-visible dropdown-list " : "dropdown-hidden dropdown-list "} >
                {displayTitleCheckout}
                <div>{this.state.msg}</div>
                {
                    this.props.cart.length &&
                    this.props.cart.map( (p) => {
                    return(
                        <DropdownListItem key={p.id} product={p}/>
                    );
                })}
                {checkoutPopUp}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.userReducer.isLoggedIn
});
export default connect(mapStateToProps)(DropdownList);