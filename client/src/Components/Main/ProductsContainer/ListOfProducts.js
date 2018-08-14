import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'

class ListOfProducts extends React.Component {

    componentWillReceiveProps(){
        console.log("ListOfProducts received new props: ", this.props);
    }

    render(){
        console.log("ListOfProducts rendering...")
        return(
            this.props.products.map( (p) => {
                return (
                    <Product key={p.id} product={p}/>
                );
            })
        );     
    }
}

const mapStateToProps = state => ({
    products: state.products
});
export default connect(mapStateToProps)(ListOfProducts);

