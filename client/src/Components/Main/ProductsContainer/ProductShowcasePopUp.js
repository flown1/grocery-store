import React from 'react';
import '../../../Styles/products/ProductShowcasePopUp.css';

export default class ProductShowcasePopUp extends React.Component{
    render() {
        console.log("Rendering popup");
        return(<div>
                <div className="blur">
                </div>
                <div className="popup-box">
                    <div className="popup-left-section">
                        <img className="popup-gallery-image" src={this.props.product.imgUrl} />
                    </div>
                    <div className="popup-right-section">
                        <h3>{this.props.product.name}</h3>
                       <table className="products-specs-table">
                           <tr>
                               <td className="products-specs-table-cell products-specs-table-cell-title">Country of Origin:</td>
                               <td className="products-specs-table-cell">{this.props.product.desc.origin || "no data"}</td>
                           </tr>
                           <tr>
                               <td className="products-specs-table-cell products-specs-table-cell-title">Vitamins:</td>
                               <td className="products-specs-table-cell">{this.props.product.desc.vitamins || "no data"}</td>
                           </tr>
                       </table>
                        <div className="product-desc">
                            {this.props.product.desc.text}
                        </div>
                    </div>
                    <div className="the-x-button" onClick={this.props.closePopup}>X</div>
                </div>
            </div>
        )
    }
}