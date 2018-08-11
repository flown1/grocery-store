import React from 'react';
import { connect } from "react-redux";

class Product extends React.Component {

    render() {
        return (
            <div>{1}</div>
        );
    }
}
const mapStateToProps = (state) => {
    //quantity: state.prod
};
export default connect(mapStateToProps)(Product);
