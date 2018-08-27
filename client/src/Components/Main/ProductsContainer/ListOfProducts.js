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
        if(this.props.products.loading){
            console.log("loading...");
            return (<div>Loading...</div>);
        }else{
            console.log("Loading DONE");
            return(
                this.props.products.map( (p) => {
                    console.log("rendering product: ", p);
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
    loading: state.productsReducer.loading
});
export default connect(mapStateToProps)(ListOfProducts);

