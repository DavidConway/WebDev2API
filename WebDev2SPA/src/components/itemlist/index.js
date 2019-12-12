import React, { Component, Fragment } from "react";
import "./itemlist.css"
import Item from '../item/';

export default class ItemList extends Component {
    render() {
        const items = this.props.itemList.map(c => (
            <Item key={c.itemName} itemInfo={c} deleteHandler={this.props.deleteHandler} />
        ));
        return (
            <div>
                <Fragment>{items}</Fragment>
            </div>
        );
    }
}