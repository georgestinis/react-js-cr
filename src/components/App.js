import React, { Component } from "react";
import axios from "axios";
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";
import Loader from "./Loader";
import "./app.css";

class App extends Component {
    state = {
        customers: [],
        loader: false,
        url: "http://localhost/laravel-rest-api/public/api/customers"
    };

    getCustomers = async () => {
        this.setState({ loader: true });
        const customers = await axios.get(this.state.url);
        this.setState({ customers: customers.data, loader: false });
    };

    deleteCustomer = async id => {
        this.setState({ loader: true });
        await axios.delete(`${this.state.url}/${id}`);

        this.getCustomers();
    };

    componentDidMount(){
        this.getCustomers();
    };

    onDelete = id => {
        console.log('app ', id);
        this.deleteCustomer(id);
    };

    render () {
        return (
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">
                            React JS CRUD with laravel API
                        </a>
                    </div>
                </div>
                <div className="ui main container">
                    <MyForm />
                    {
                        this.state.loader ? <Loader /> : ""
                    }
                    <CustomerList customers={this.state.customers} onDelete={this.onDelete}/>
                </div>
            </div>
        ); 
    };
}

export default App;