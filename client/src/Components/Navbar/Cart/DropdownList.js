import React from "react";
import '../../../Styles/navbar/CartDropdownList.css';
import DropdownListItem from "./DropdownListItem";

export default class DropdownList extends React.Component{
    render() {
        return (
            <div className={this.props.showDropdown? "dropdown-visible dropdown-list " : "dropdown-hidden dropdown-list "} >
                {
                    this.props.cart.length &&
                    this.props.cart.map( (p) => {
                    return(
                        <DropdownListItem key={p.id} product={p}/>
                    );
                })}
                <div className="dropdown-list-fixed">
                    Total: ${this.props.total}
                    <div className="btn btn-main btn-red">Checkout</div>
                </div>
            </div>
        );
    }
}