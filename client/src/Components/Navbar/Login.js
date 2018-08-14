import React from 'react';
import {connect} from "react-redux";

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            showMenu: false
        }

        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState({showMenu: !this.state.showMenu});
    }
    render(){
        if(!this.props.isLoggedIn){
            return(
                <div className="user" onClick={this.handleToggleClick}>
                    <i className="fas fa-user"></i>
                    Login
                </div>
            )
        }else{
            return(
                <div className="user" onClick={this.handleToggleClick}>
                    <i className="fas fa-user"></i>
                    Hello, {this.props.userInfo.firstName} {this.props.userInfo.lastName}
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => ({
    isLoggedIn: state.userReducer.isLoggedIn,
    userInfo: state.userReducer.userInfo
});
export default connect(mapStateToProps)(Login);