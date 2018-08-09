import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import {addProduct} from "../Redux/actions/productActions";

class ListOfProducts extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.products.map( (p) => {
                return (
                    <Product product={p}/>
                );
            })
        );     
    }
}

const mapStateToProps = state => ({
    products: state.products
});
export default connect(mapStateToProps)(ListOfProducts);

