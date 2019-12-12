import React, { Component } from "react";
import "./editPage.css"
import api from "../../dataStore/stubAPI";
import { withRouter, Link } from 'react-router-dom';

let state = {
    imageUrl: '',
    itemName: '',
    options: [
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
            price: 0
        },
        {
            link: {
                url: '',
                Text: ''
            },
            price: 0
        }
    ]
};
let oldID = "";
let save = () => {
    if (state.itemName != "") {
        
        api.delete(oldID);
        api.add(state.imageUrl, state.itemName, state.options);
    }
};
const EditPage = ({match}) => {
    const item = api.find(match.params.id);
    oldID = match.params.id;
    state.itemName = item.itemName;
    state.imageUrl = item.imageUrl;
    state.options = item.options;
    return (
        <div className="main">
            <div className="topBottomDiv">
                <div className="topBottomRow">
                    <div className="topBottomCell">
                        <input type="text" placeholder={state.itemName} className="topItem" onChange={e => state.itemName = e.target.value} />
                    </div>
                    <div className="topBottomCell">
                        <input type="url" placeholder={state.imageUrl} className="topItem" onChange={e => state.imageUrl = e.target.value} />
                    </div>
                </div>
            </div>
            <div className="options">
                <div className="TableRow">
                    <div className="optionCell">
                        <input type="text" placeholder={state.options[0].link.Text} className="optionItem" onChange={e => state.options[0].link.Text = e.target.value} />
                    </div>
                    <div className="optionCell">
                        <input type="url" placeholder={state.options[0].link.url} className="optionItem" onChange={e => state.options[0].link.url = e.target.value} />
                    </div>
                    <div className="optionCell">
                        <input type="number" placeholder={state.options[0].price} className="optionItem" onChange={e => state.options[0].price = e.target.value} />
                    </div>
                </div>
                <div className="TableRow">
                    <div className="optionCell">
                        <input type="text" placeholder={state.options[1].link.Text} className="optionItem" onChange={e => state.options[1].link.Text = e.target.value} />
                    </div>
                    <div className="optionCell">
                        <input type="url" placeholder={state.options[1].link.url} className="optionItem" onChange={e => state.options[1].link.url = e.target.value} />
                    </div>
                    <div className="optionCell">
                        <input type="number" placeholder={state.options[1].price} className="optionItem" onChange={e => state.options[1].price = e.target.value} />
                    </div>
                </div>
                <div className="TableRow">
                    <div className="optionCell">
                        <input type="text" placeholder={state.options[2].link.Text} className="optionItem" onChange={e => state.options[2].link.Text = e.target.value} />
                    </div>
                    <div class="optionCell">
                        <input type="url" placeholder={state.options[2].link.url} className="optionItem" onChange={e => state.options[2].link.url = e.target.value} />
                    </div>
                    <div class="optionCell">
                        <input type="number" placeholder={state.options[2].price} className="optionItem" onChange={e => state.options[2].price = e.target.value} />
                    </div>
                </div>
            </div>
            <div className="topBottomDiv">
                <div className="topBottomRow">
                    <div className="topBottomCell">
                        <Link to="/">
                            <button type="button" className="bottomItem" onClick={save}>Save</button>
                        </Link>
                    </div>
                    <div className="topBottomCell">
                        <Link to="/">
                            <button type="button" className="bottomItem">Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(EditPage);