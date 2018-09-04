import React from "react";
import '../../../Styles/navbar/Login/LoginDropdown.css';

export default class LoginDropdown extends React.Component{
    render() {
        const isAdmin = this.props.userInfo.admin ? <div className="account-status-info admin">ADMIN</div> : null;
        return (
            <div className={this.props.showDropdown? "dropdown-visible dropdown-list " : "dropdown-hidden dropdown-list "} >
                <div className="dropdown-list-fixed">
                    <h3>Account Info:</h3>
                    <div>{this.props.userInfo.firstName || "-"} {this.props.userInfo.lastName || "-"}</div>
                    <div>{this.props.userInfo.address || "-"}</div>
                    <div>{this.props.userInfo.zipCode || "-"} {this.props.userInfo.city || "-"}</div>
                    {isAdmin}
                    <button className="btn btn-red" onClick={this.props.onClickHandle}>Sign Out</button>
                </div>
            </div>
        );
    }
}