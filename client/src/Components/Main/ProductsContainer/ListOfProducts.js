import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class ListOfProducts extends React.Component {
    state = {
        products: this.props.products,
    };

    componentWillReceiveProps(){
        this.setState({
            products: this.props.products,
        });
    }

    render(){
        if(this.props.products.loading){
            console.log("loading...");
            return (<div>Loading...</div>);
        }else{

            let products = this.props.filteredProducts? this.props.filteredProducts: this.props.products;

            return(
                products.map( (p) => {
                    return (
                        <Product key={p.id} product={p}/>
                    );
                })
            );
        }
    }
}

const mapStateToProps = state => ({
    products: state.productsReducer.products,
    filteredProducts: state.productsReducer.filteredProducts,
    loading: state.productsReducer.loading
});
export default connect(mapStateToProps)(ListOfProducts);

