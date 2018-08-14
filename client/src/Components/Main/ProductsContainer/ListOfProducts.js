import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class ListOfProducts extends React.Component {
    state = {
        products: this.props.products
    };

    componentWillReceiveProps(){
        console.log("ListOfProducts received new props: ", this.props);
        this.setState({
            products: this.props.products
        });
    }

    render(){
        console.log("ListOfProducts rendering...");
        return(
            this.state.products.map( (p) => {
                console.log("rendering product: ", p);
                return (
                    <Product key={p.id} product={p}/>
                );
            })
        );     
    }
}

const mapStateToProps = state => ({
    products: state.productsReducer.products
});
export default connect(mapStateToProps)(ListOfProducts);

