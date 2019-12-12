import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import AddPage from "./components/addPage/"
import EditPage from "./components/editPage/"

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/edit/:id' component={EditPage}/>
                    <Route path="/addItem" component={AddPage} />
                    <Route exact path="/" component={App} />
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Router />, document.getElementById('root'));
