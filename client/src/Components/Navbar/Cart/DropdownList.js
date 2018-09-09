import React from "react";
import '../../../Styles/navbar/CartDropdownList.css';
import DropdownListItem from "./DropdownListItem";
import CheckoutPopUp from "../../Main/Checkout/CheckoutPopUp";

export default class DropdownList extends React.Component{
    state = {
      showCheckoutPopUp: false
    };

    handleOnClickCheckout = (e) => {
        e.preventDefault();
        this.openPopUp();
    };

    openPopUp = () => {
        this.setState({...this.state, showCheckoutPopUp: true});
    };

    render() {
        const checkoutPopUp = this.state.showCheckoutPopUp?
            <CheckoutPopUp closePopup={this.handlePopupClose}/>
            : <div className="dropdown-list-fixed">
                Total: ${this.props.total}
                <div className="btn btn-main btn-red" onClick={this.handleOnClickCheckout}>Checkout</div>
            </div>;

        const displayTitleCheckout = this.state.showCheckoutPopUp? <h3>Checkout</h3> : null
        return (
            <div className={this.props.showDropdown? "dropdown-visible dropdown-list " : "dropdown-hidden dropdown-list "} >
                {displayTitleCheckout}
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