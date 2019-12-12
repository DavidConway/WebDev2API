import React, {Component} from 'react';
import './App.css';
import ItemList from './components/itemlist/';
import Header from './components/header/';
import * as api from './api';
import _ from "lodash";

class App extends Component {

    state = { items: [{}] };
    handelSearch = (value) => {
        this.setState({ search: value })
    };

    componentDidMount() {
        
        api.getAll().then(resp => {
            console.log("test", resp);
            this.setState({
                items: resp
            });
        }).catch(console.error);
        
    };
    deleteItem = (key) => {
        api.Delete(key);
        this.setState({});
    };
    render() {
        const items = _.sortBy(this.state.items, item => item.itemName);
        return (
            <div>
                <Header onUserInput={this.handelSearch} />
                <ItemList itemList={items} deleteHandler={this.deleteItem} />
            </div>
        );
    }
}

export default App;
