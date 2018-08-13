import React from 'react';
import {connect} from "react-redux";
import DropdownList from "./DropdownList";

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showDropdown: false
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(){
        this.toggleDropdown();
    }
    componentWillReceiveProps(){
        console.log("cart received new props:", this.props);
    }
    toggleDropdown() {
        this.setState({showDropdown: !this.state.showDropdown});

        console.log("shownDropdown: ", this.state.showDropdown);
    }

    render(){
        return(
            <div>
                <div className="cart" onClick={this.handleOnClick}>
                    <i className="fas fa-shopping-cart"></i>
                    Cart: <div className="cart-counter">{this.props.cart.length}</div>
                </div>
                <DropdownList showDropdown={this.state.showDropdown} cart={this.props.cart} total={this.props.total}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    total: state.total
});

export default connect(mapStateToProps)(Cart);