import React, { Component } from "react";
import  "./option.css"

export default class Option extends Component {
    render() {
        return (
            <div className="optionDiv">
                <tr >
                    <td>
                        <a href={this.props.data.link.url}>{this.props.data.link.Text}</a>
                    </td>
                    <td>
                        <p className="pricePadding">
                            &euro;:
                        </p>
                    </td>
                    <td>
                        <p>
                            {this.props.data.price}
                        </p>
                    </td>
                </tr>
           </div>
        );
    }
}