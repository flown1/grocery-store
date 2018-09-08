import React, { Component } from 'react';
import './Styles/App.css';

import ListOfProducts from './Components/Main/ProductsContainer/ListOfProducts'
import Navbar from './Components/Navbar/Navbar'
import FeaturedSlider from './Components/Main/Slider/Slider'
import './Styles/utils/Utils.css'
import Footer from "./Components/Footer/Footer";
import * as ApiFetcher from "./Utils/ApiFetcher.js"
import connect from "react-redux/es/connect/connect";
import {
    productsFetchBegin,
    productsFetchFailure,
    productsFetchSuccess
} from "./Redux/actions/productActions";
import SearchBar from "./Components/Main/ProductsContainer/SearchBar";
import AddingProductPopUp from "./Components/Main/ProductsContainer/AddingProductPopUp";

class App extends Component {
    state = {
        showAddProductPopUp: false
    };

    componentDidMount() {
        this.props.fetchProducts();
    }

    handleButtonClick = (e) => {
        e.preventDefault();
        this.setState({
            showAddProductPopUp : true
        })
    };

    handlePopupClose = () => {
        this.setState({showAddProductPopUp: false});
    };

    render() {
        const addProductPopUp = this.state.showAddProductPopUp
            ? <AddingProductPopUp fetchProducts={this.props.fetchProducts} closePopup={this.handlePopupClose}/>
            : null;
        const addProductButton = this.props.isLoggedIn && this.props.userInfo.admin
            ? <button className="btn btn-main btn-red btn-lg" onClick={this.handleButtonClick}>+ Add Product</button>
            : null;

        return (
          <div className="App">
              {addProductPopUp}
            <Navbar />
            <FeaturedSlider />
            <div className="horizontal-separator"></div>
            <SearchBar onChange={this.props.searchProducts}/>
            {addProductButton}

            <div className="flex-wrapper list-of-products-wrapper">
            <ListOfProducts/>
            </div>
            <Footer/>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {
            dispatch(productsFetchBegin());
            ApiFetcher.getAllProducts( (products) => {
                if(products.length > 0){
                    dispatch(productsFetchSuccess(products))
                }else{
                    dispatch(productsFetchFailure("Couldn't fetch any products"));
                }
            });
        },
    }
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.userReducer.isLoggedIn,
        userInfo: state.userReducer.userInfo
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
