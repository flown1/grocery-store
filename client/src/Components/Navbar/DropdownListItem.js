import React from "react";

export default class DropdownListItem extends React.Component{
    render(){
        return(
            <div className="dropdown-list-item">
                <div className="dropdown-list-item-quantity">
                    {this.props.product.quantity}
                </div>
                <div className="dropdown-list-item-name">
                    {this.props.product.name}
                </div>
                <div className="dropdown-list-item-subtotal">
                    ${this.props.product.price * this.props.product.quantity}
                </div>
            </div>
        )
    }
}