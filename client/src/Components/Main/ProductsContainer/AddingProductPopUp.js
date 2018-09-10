import React from 'react';
import '../../../Styles/products/ProductShowcasePopUp.css';
import Product from "./Product";
import * as ApiFetcher from "../../../Utils/ApiFetcher";

export default class AddingProductPopUp extends React.Component{
    state = {
        product: {
            name: '',
            price: '',
            imgUrl: '',
            desc: {
                vitamins: '',
                text: '',
                origin: ''
            }
        },
        errMsg: ''
    };

    handleOnAdd = (e) => {
      e.preventDefault();

      console.log("Will send product data: ", this.state.product);

      ApiFetcher.addProduct(this.state.product, (resData) => {
          console.log(`reData: `, resData);
          if(resData.status === 201){

            this.props.fetchProducts();
            this.props.closePopup();
          }else if(resData.status === 204){
              console.log("CONFILCT");
              this.displayErrMsg("There is already a product by given name!");
          }else{
              this.displayErrMsg("Unexpected error while trying to add product");
          }
      });
    };

    displayErrMsg = (msg) => {
        this.setState({
            ...this.state,
            errMsg: msg
        })
    };

    render() {
        console.log("Rendering popup");

        return(<div>
        <div className="blur">
        </div>
            <div className="popup-box">
                <div className="popup-left-section">
                    <Product product={this.state.product}/>
                </div>
                <div className="popup-right-section">
                    <h3>Add Product:</h3>
                    <div className="form-row">
                        <label>Name:</label>
                        <input onChange={ (e) => {
                            this.setState({...this.state,
                                product: { ...this.state.product, name: e.target.value }
                            })
                        }}/>
                    </div>

                    <div className="form-row">
                        <label>Price:</label>
                        <input onChange={ (e) => {
                            this.setState({...this.state,
                                product: { ...this.state.product, price: e.target.value }
                            })
                        }}/>
                    </div>

                    <div className="form-row">
                        <label>Image URL:</label>
                        <input onChange={ (e) => {
                            this.setState({...this.state,
                                product: { ...this.state.product, imgUrl: e.target.value }
                            })
                        }}/>
                    </div>
                    <div className="form-row">
                        <label>Description:</label>
                        <input onChange={ (e) => {
                            this.setState({...this.state,
                                product: { ...this.state.product, desc: {
                                        ...this.state.product.desc,
                                        text: e.target.value
                                    }}
                            })
                        }}/>
                    </div>
                    <div className="form-row">
                        <label>Vitamins:</label>
                        <input onChange={ (e) => {
                            this.setState({...this.state,
                                product: { ...this.state.product, desc: {
                                        ...this.state.product.desc,
                                        vitamins: e.target.value
                                    }}
                            })
                        }}/>
                    </div>
                    <div className="form-row">

                        <label>Origin:</label>
                        <input onChange={ (e) => {
                            this.setState({...this.state,
                                product: { ...this.state.product, desc: {
                                        ...this.state.product.desc,
                                        origin: e.target.value
                                    }}
                            })
                        }}/>
                    </div>
                    <div>
                        <button className="btn btn-red btn-main btn-md" onClick={this.handleOnAdd}>Add</button>
                        <div>{this.state.errMsg}</div>
                    </div>
                </div>

                </div>
                <div className="the-x-button" onClick={this.props.closePopup}>X</div>
            </div>
        )
    }
}