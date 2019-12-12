import React, { Component} from "react";
import "./header.css"
import { Link } from 'react-router-dom';

export default class Header extends Component {
    state = {
    }
    handleChange = () => {
        this.props.onUserInput(this.state.search);
    };

    handleTextChange = e => {
        e.preventDefault();
        this.setState({ search: e.target.value })
        
    }
    render() {
        return (
            <div className="headerBand">
                <div className="serchBar">
                    <input type="text" placeholder="Name Search" onChange={this.handleTextChange} className="serchBarText" />
                    <span>
                        <button type="button" className="serchBarButton" onClick={this.handleChange}>search</button>
                    </span>
                <Link to={'/addItem'}>
                        <span>
                         
                        <button type="button" className="add" >Add Item</button>
                    </span>
                </Link>
                </div>
            </div>
        );
    }
}
