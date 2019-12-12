import React, { Component} from "react";
import "./item.css"
import Options from '../options/';
import { Link } from 'react-router-dom';

export default class Item extends Component {
    state = {
        imageUrl: this.props.itemInfo.imageUrl,
        itemName: this.props.itemInfo.itemName,
        options: this.props.itemInfo.options
    };
    Del = (e) => {
        e.preventDefault();
        this.props.deleteHandler(this.state.itemName);

    };
    render() {

        return (
            <div className="item">
                <div className="itemContent">
                    <img alt="image" src={this.state.imageUrl} className="itemImage" />
                    <h1>
                        {this.state.itemName}
                    </h1>
                    <Options lines={this.state.options} />
                    <div className="itemButtons">
                        <tr>
                            <td>
                                <button type="button" onClick={this.Del}>DEL</button>
                            </td>
                            <td>
                                <Link to={`/edit/${this.state.itemName}`}>
                                    <button type="button">EDIT</button>
                                </Link>
                            </td>
                        </tr>
                    </div>
                </div>
            </div>
        );
    }
}