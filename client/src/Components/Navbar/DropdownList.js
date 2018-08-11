import React from "react";
import '../../Styles/navbar/CartDropdownList.css';

export default class DropdownList extends React.Component{
    render() {
        return (
            <div className={this.props.showDropdown? "dropdown-visible dropdown-list " : "dropdown-hidden dropdown-list "} >
                {this.props.cart.map( (p) => {
                    return(
                        <div className="dropdown-list-item">
                            <div className="dropdown-list-item-quantity">
                                {p.quantity}
                            </div>
                            <div className="dropdown-list-item-name">
                                {p.name}
                            </div>
                            <div className="dropdown-list-item-subtotal">
                                ${p.price * p.quantity}
                            </div>
                        </div>
                    );
                })}
                <div className="dropdown-list-fixed">
                    Total: {this.props.total}
                    <div className="btn btn-main btn-red">Checkout</div>
                </div>
            </div>
        );
    }
}