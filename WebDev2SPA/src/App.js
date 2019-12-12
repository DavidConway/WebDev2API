import React, {Component} from 'react';
import './App.css';
import ItemList from './components/itemlist/';
import Header from './components/header/';
import api from './dataStore/stubAPI';
import _ from "lodash";

class App extends Component {
    state = {};

    handelSearch = (value) => {
        this.setState({ search: value })
    };
    componentDidMount() { 
        let StoredItems = require('./dataStore/data');
        api.initialize(StoredItems);
        this.setState({});
    }
    deleteItem = (key) => {
        api.delete(key);
        this.setState({});
    };
    render() {
        let Items = api.getAll();
        let filteredItems = Items.filter(c => {
            const name = `${c.itemName}`;
            console.log(`${name}`);
            return name.search(this.state.search) !== -1;
        })
        let sortedItems = _.sortBy(filteredItems, c => c.itemName);
        return (
            <div>
                <Header onUserInput={this.handelSearch} />
                <ItemList itemList={sortedItems} deleteHandler={this.deleteItem} />
            </div>
        );
    }
}

export default App;
