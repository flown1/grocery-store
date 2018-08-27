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

class App extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
    return (
          <div className="App">
            <Navbar />
            <FeaturedSlider />
            <div className="horizontal-separator"></div>
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
        }
    }
};

export default connect(null, mapDispatchToProps)(App);
