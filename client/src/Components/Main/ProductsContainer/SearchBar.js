import React, {Component} from "react";
import {productsFilter} from "../../../Redux/actions/productActions";
import {connect} from "react-redux";
import '../../../Styles/products/SearchBar.css';

class SearchBar extends Component {

    render(){
        return(
            <input className="searchbar" placeholder="Search..." onChange={this.handleOnChange}/>
        );
    }

    handleOnChange = (e) => {
        this.props.searchProducts(e.target.value);
    }
}

const mapStateToProps = (dispatch) => {
    return {
        searchProducts: (query) => {
            dispatch(productsFilter(query))
        }
    }
};

export default connect(null, mapStateToProps)(SearchBar);