import React from 'react';
import {connect} from "react-redux";
import ProductShowcasePopUp from "../../Main/ProductsContainer/ProductShowcasePopUp";
import LoginPopUp from "./LoginPopUp";
import DropdownList from "../Cart/DropdownList";
import LoginDropdown from "./LoginDropdown";
import {productsFilter} from "../../../Redux/actions/productActions";
import {signOut} from "../../../Redux/actions/userActions";

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            showMenu: false,
            showSignInFormPopUp: false
        };

        this.handleToggleClickWhenSignedIn = this.handleToggleClickWhenSignedIn.bind(this);
        this.handleToggleClickWhenNotSignedIn = this.handleToggleClickWhenNotSignedIn.bind(this);
        this.handlePopupClose = this.handlePopupClose.bind(this);
    }

    handleToggleClickWhenSignedIn(){
        this.setState({showMenu: !this.state.showMenu});
    }

    handleToggleClickWhenNotSignedIn(){
        this.setState({showSignInFormPopUp: true});
    }

    handlePopupClose(){
        this.setState({showSignInFormPopUp: false});
    }
    render(){
        const popup = (this.state.showSignInFormPopUp? <LoginPopUp product={this.props.product} closePopup={this.handlePopupClose}/> : null);

        if(!this.props.isLoggedIn){
            return(
                <div>
                    {popup}
                    <div className="user" onClick={this.handleToggleClickWhenNotSignedIn}>
                        <i className="fas fa-user"></i>
                        Login
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <div className="user" onClick={this.handleToggleClickWhenSignedIn}>
                        <i className="fas fa-user"></i>
                        Hello, {this.props.userInfo.firstName} {this.props.userInfo.lastName}
                    </div>
                    <LoginDropdown showDropdown={this.state.showMenu} userInfo={this.props.userInfo} onClickHandle={this.props.signOut}/>
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    isLoggedIn: state.userReducer.isLoggedIn,
    userInfo: state.userReducer.userInfo
});

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOut())
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Login);