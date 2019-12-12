import React, { Component, Fragment } from "react";
import "./options.css"
import Option from '../option/';

export default class Options extends Component {
    render() {
        const items = this.props.lines.map(c => (
            <Option key={c.price} data={c}/>
        ));
        return (
            <div>
                <Fragment>{items}</Fragment>
            </div>
        );
    }
}