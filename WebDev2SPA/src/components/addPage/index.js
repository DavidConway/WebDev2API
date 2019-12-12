import React, { Component } from "react";
import "./addPage.css"
import * as api from '../../api';
import { Link } from 'react-router-dom';

export default class AddPage extends Component {
    state = {
        imageUrl: '',
        itemName: '',
            options: [
                {
                    link: {
                        url: '',
                        Text: ''
                    },
                    price:0
                },
                {
                    link: {
                        url: '',
                        Text: ''
                    },
                    price: 0
                },
                {
                    link: {
                        url: '',
                        Text: ''
                    },
                    price:0
                }
            ]
    };
    add = () => {
        if (this.itemName != "") {
            this.forceUpdate();
            api.add(this.state.imageUrl, this.state.itemName, this.state.options);
        }
    };
    render() {
        return (
            <div className="main">
                <div className="topBottomDiv">
                    <div className="topBottomRow">
                        <div className="topBottomCell">
                            <input type="text" placeholder="ItemName" className="topItem" onChange={e => this.setState({ itemName: e.target.value })} />
                        </div>
                        <div className="topBottomCell">
                            <input type="url" placeholder="ImgeUrl" className="topItem" onChange={e => this.setState({ imageUrl: e.target.value })} />
                        </div>
                    </div>
                </div>
                <div className= "options">
                    <div className="TableRow">
                        <div className="optionCell">
                            <input type="text" placeholder="Site Name" className="optionItem" onChange={e => this.state.options[0].link.Text = e.target.value} />
                        </div>
                        <div className="optionCell">
                            <input type="url" placeholder="Link" className="optionItem" onChange={e => this.state.options[0].link.url = e.target.value} />
                         </div>
                        <div className="optionCell">
                            <input type="number" placeholder="Price" className="optionItem"onChange={e => this.state.options[0].price = e.target.value} />
                        </div>
                    </div>
                    <div className="TableRow">
                        <div className="optionCell">
                            <input type="text" placeholder="Site Name" className="optionItem"onChange={e => this.state.options[1].link.Text = e.target.value} />
                        </div>
                        <div className="optionCell">
                            <input type="url" placeholder="Link" className="optionItem"onChange={e => this.state.options[1].link.url = e.target.value} />
                        </div>
                        <div className="optionCell">
                            <input type="number" placeholder="Price" className="optionItem"onChange={e => this.state.options[1].price = e.target.value} />
                        </div>
                    </div>
                    <div className="TableRow">
                        <div className="optionCell">
                            <input type="text" placeholder="Site Name" className="optionItem"onChange={e => this.state.options[2].link.Text = e.target.value} />
                        </div>
                        <div class="optionCell">
                            <input type="url" placeholder="Link" className="optionItem"onChange={e => this.state.options[2].link.url = e.target.value} />
                        </div>
                        <div class="optionCell">
                            <input type="number" placeholder="Price" className="optionItem" onChange={e => this.state.options[2].price = e.target.value} />
                        </div>
                    </div>
                </div>
                <div className="topBottomDiv">
                    <div className="topBottomRow">
                        <div className="topBottomCell">
                            <Link to="/">
                            <button type="button" className="bottomItem" onClick={this.add}>Save</button>
                            </Link>
                        </div>
                        <div className="topBottomCell">
                            <Link to = "/">
                            <button type="button" className="bottomItem">Cancel</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}