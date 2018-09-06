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
    productsFetchSuccess, productsFilter
} from "./Redux/actions/productActions";
import SearchBar from "./Components/Main/ProductsContainer/SearchBar";
import ProductShowcasePopUp from "./Components/Main/ProductsContainer/ProductShowcasePopUp";
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
        const popup = (this.state.showAddProductPopUp? <AddingProductPopUp closePopup={this.handlePopupClose}/> : null);

        return (
          <div className="App">
              {popup}
            <Navbar />
            <FeaturedSlider />
            <div className="horizontal-separator"></div>
              <SearchBar onChange={this.props.searchProducts}/>
              <button class="btn btn-red btn-md" onClick={this.handleButtonClick}>+ Add Product</button>

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

export default connect(null, mapDispatchToProps)(App);
