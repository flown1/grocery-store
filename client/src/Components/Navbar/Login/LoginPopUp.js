import React from "react";
import "../../../Styles/navbar/Login/LoginPopUp.css";
import * as ApiFetcher from "../../../Utils/ApiFetcher";
import * as InputValidator from "../../../Utils/InputValidator";
import {userSignedIn} from "../../../Redux/actions/userActions";
import {connect} from "react-redux";

class LoginPopUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displaySignUpFormInstead: false,
            errorMsg: '',
            repassword: '',

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

        const firstNameValid = !InputValidator.isEmpty(this.state.firstName) && InputValidator.lettersOnly(this.state.firstName) && InputValidator.lengthInRange(this.state.firstName, 2, 20),
                lastNameValid = !InputValidator.isEmpty(this.state.lastName) && InputValidator.lettersOnly(this.state.lastName) && InputValidator.lengthInRange(this.state.lastName, 2, 20),
                emailValid = !InputValidator.isEmpty(this.state.email) && InputValidator.isEmail(this.state.email),
                passwordValid = !InputValidator.isEmpty(this.state.password) && InputValidator.passwordsEqual(this.state.password, this.state.repassword),
                repasswordValid = !InputValidator.isEmpty(this.state.repassword),
                cityValid = !InputValidator.isEmpty(this.state.city) && InputValidator.lettersOnly(this.state.city),
                addressValid = !InputValidator.isEmpty(this.state.address) && InputValidator.isAddress(this.state.address),
                zipCodeValid = !InputValidator.isEmpty(this.state.zipCode) && InputValidator.isZipcode(this.state.zipCode);

        if(!this.state.displaySignUpFormInstead ){ /// !... ???????
            if(emailValid) {
                return true
            }
        }else{
            return !!(firstNameValid && lastNameValid && emailValid && passwordValid && repasswordValid && cityValid && addressValid && zipCodeValid)
        }

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
                if(data) {
                    console.log(`Nice! got user: `, data);
                    this.setState({
                        errorMsg: ''
                    });
                    this.props.onUserSignedIn(data);

                }else{
                    console.log('Email or password incorrect');
                    this.setState({errorMsg: 'Email or password incorrect'})
                }
           });
        }else{
            this.setState({errorMsg: "Invalid input. Check form fields and try again"});
        }
    }

    handleOnSubmitSignUp(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        if(this.validateInput()){
            ApiFetcher.signUpUser({
                'email': this.state.email,
                'password': this.state.password,
                'firstName': this.state.firstName,
                'lastName': this.state.lastName,
                'address': this.state.address,
                'city': this.state.city,
                'zipCode': this.state.zipCode
            }, (data) => {
                console.log("got data :", data);
                if (data.status === 201) {
                    this.setState({
                        ...this.state,
                        errorMsg: 'Sign Up SUCCESS! You can now sign in!'
                    });
                } else if (data.status === 409) {
                    console.log('Email already in use');
                    this.setState({
                        ...this.state,
                        errorMsg: 'User with given email already exists'
                    })
                }
            });
        } else {
            this.setState({
                ...this.state,
                errorMsg : 'Invalid input. Check form fields and try again'
            })
        }
    }

    handleSingUpLinkClicked() {
        this.setState({...this.state, displaySignUpFormInstead: true});
    }

    handleOnChangeInputFirstName = (e) => {
        this.setState({...this.state, firstName: e.target.value});
    };

    handleOnChangeInputLastName = (e) => {
        this.setState({...this.state, lastName: e.target.value});
    };

    handleOnChangeInputRePassword = (e) => {
        this.setState({...this.state, repassword: e.target.value});
    };

    handleOnChangeInputEmail = (e) => {
        this.setState({...this.state, email: e.target.value});
    };

    handleOnChangeInputPassword = (e) => {
        this.setState({...this.state, password: e.target.value});
    };

    handleOnChangeInputCity = (e) => {
        this.setState({...this.state, city: e.target.value});
    };

    handleOnChangeInputAddress = (e) => {
        this.setState({...this.state, address: e.target.value});
    };

    handleOnChangeInputZipCode = (e) => {
        this.setState({...this.state, zipCode: e.target.value});
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
                                <input className="popup-box-input" onChange={this.handleOnChangeInputFirstName}/>
                            </div>
                            <div className="form-signup-row">
                                <label>Last Name:</label>
                                <input className="popup-box-input" onChange={this.handleOnChangeInputLastName}/>
                            </div>
                        </div>
                        <div className="form-signup-column">
                            <div className="form-signup-row">
                                <label>E-mail:</label>
                                <input className="popup-box-input" onChange={this.handleOnChangeInputEmail}/>
                            </div>
                            <div className="form-signup-row">
                                <label>Password:</label>
                                <input className="popup-box-input" onChange={this.handleOnChangeInputPassword}/>
                            </div>
                            <div className="form-signup-row">
                                <label>Repeat password:</label>
                                <input className="popup-box-input" onChange={this.handleOnChangeInputRePassword}/>
                            </div>
                        </div>
                        <div className="form-signup-column">
                            <div className="form-signup-row">
                                <label>Address:</label>
                                <input className="popup-box-input" onChange={this.handleOnChangeInputAddress}/>
                            </div>
                            <div className="form-signup-row">
                                <label>City:</label>
                                <input className="popup-box-input" onChange={this.handleOnChangeInputCity}/>
                            </div>
                            <div className="form-signup-row">
                                <label>Zip Code:</label>
                                <input className="popup-box-input" onChange={this.handleOnChangeInputZipCode}/>
                            </div>
                        </div>
                    </form>
                    <div className="error-box">{this.state.errorMsg}</div>
                    <div className="btn btn-main btn-md btn-red" onClick={this.handleOnSubmitSignUp}>Sign Up</div>
                </div>
            </div>

            :   <div className="popup-box-content">
                    <div className="title-wrapper">
                        <h3>Sign In</h3>
                    </div>
                    <div className="form-wrapper">
                        <form>
                            <label for="email">E-mail:</label>
                            <input id="email" className="popup-box-input" onChange={this.handleOnChangeInputEmail}/>
                            <label for="password">Password:</label>
                            <input id="password" type="password" className="popup-box-input" onChange={this.handleOnChangeInputPassword}/>
                            <div className="error-box">{this.state.errorMsg}</div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onUserSignedIn: (user) => {
            dispatch(userSignedIn(user));
        }
    }
};

export default connect(null, mapDispatchToProps)(LoginPopUp);