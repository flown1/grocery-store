import React from "react";
import "../../../Styles/navbar/Login/LoginPopUp.css";
import * as ApiFetcher from "../../../Utils/ApiFetcher";
import update from 'immutability-helper';

export default class LoginPopUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displaySignUpFormInstead: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            zipCode: ''
        };

        this.validateInput = this.validateInput.bind(this);
        this.handleSingUpLinkClicked = this.handleSingUpLinkClicked.bind(this);
        this.handleOnSubmitSignIn = this.handleOnSubmitSignIn.bind(this);
        this.handleOnSubmitSignUp = this.handleOnSubmitSignUp.bind(this);
    }

    validateInput(){
        return true;
    }

    handleOnSubmitSignIn(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        console.log(`click sign in with values: ${this.state.email} : ${this.state.password}`);
        if(this.validateInput()){
            ApiFetcher.signInUser({
                'email': this.state.email,
                'password': this.state.password
            }, (data) => {
                if(data.status === 200)
                    console.log(`Nice! got user: `, data);
                else if(data.status === 204)
                    console.log('')
            });
        }
    }

    handleOnSubmitSignUp(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        console.log(`click sign up`);
        this.validateInput();
    }

    handleSingUpLinkClicked() {
        this.setState({displaySignUpFormInstead: true});
    }


    handleOnChangeInputSignInEmail = (e) => {
        this.setState({...this.state, email: e.target.value});
    };

    handleOnChangeInputSignInPassword = (e) => {
        this.setState({...this.state, password: e.target.value});
    };

    render(){
        const content = this.state.displaySignUpFormInstead ?
            <div className="popup-box-content">
                <div className="title-wrapper">
                    <h3>Sign Up</h3>
                </div>
                <div className="form-wrapper">
                    <form className="form-signup">
                        <div className="form-signup-column">
                            <div className="form-signup-row">
                                <label>First Name:</label>
                                <input className="popup-box-input"/>
                            </div>
                            <div className="form-signup-row">
                                <label>Last Name:</label>
                                <input className="popup-box-input"/>
                            </div>
                        </div>
                        <div className="form-signup-column">
                            <div className="form-signup-row">
                                <label>E-mail:</label>
                                <input className="popup-box-input"/>
                            </div>
                            <div className="form-signup-row">
                                <label>Password:</label>
                                <input className="popup-box-input"/>
                            </div>
                            <div className="form-signup-row">
                                <label>Repeat password:</label>
                                <input className="popup-box-input"/>
                            </div>
                        </div>
                        <div className="form-signup-column">
                            <div className="form-signup-row">
                                <label>Address:</label>
                                <input className="popup-box-input"/>
                            </div>
                            <div className="form-signup-row">
                                <label>City:</label>
                                <input className="popup-box-input"/>
                            </div>
                            <div className="form-signup-row">
                                <label>Zip Code:</label>
                                <input className="popup-box-input"/>
                            </div>
                        </div>
                        <div className="btn btn-main btn-md btn-red" onClick={this.handleOnSubmitSignUp}>Sign Up</div>
                    </form>
                </div>
            </div>

            :   <div className="popup-box-content">
                    <div className="title-wrapper">
                        <h3>Sign In</h3>
                    </div>
                    <div className="form-wrapper">
                        <form>
                            <label>E-mail:</label>
                            <input className="popup-box-input" onChange={this.handleOnChangeInputSignInEmail}/>
                            <label>Password:</label>
                            <input className="popup-box-input" onChange={this.handleOnChangeInputSignInPassword}/>
                            <div className="btn btn-main btn-md btn-red" onClick={this.handleOnSubmitSignIn}>Sign In</div>
                        </form>
                    </div>
                    <div className="sign-up-link-wrapper">
                        <a className="sign-up-link" onClick={this.handleSingUpLinkClicked}><p>No account? Sign up now!</p></a>
                    </div>
                </div>;

        return(
            <div>
                <div className="blur">
                </div>
                <div className="popup-box-login">
                    <div className="the-x-button" onClick={this.props.closePopup}>X</div>
                    {content}
                </div>
            </div>
        )
    }


}