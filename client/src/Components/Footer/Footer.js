import * as React from "react";
import '../../Styles/utils/Utils.css';
import '../../Styles/footer/Footer.css';

export default class Footer extends React.Component {
    render(){
        return(
            <div>
                <div className="horizontal-separator"></div>
                <div className="footer">
                    GroceryStore &copy; 2018.
                    Made with ♥ for my sweet 5 ECTS points
                </div>
            </div>
        );
    }
}