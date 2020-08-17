import React, { Component } from "react";

class Customer extends Component {
    render () {
        return (
            <tr>
                <td style={{ textAlign: "center" }}>1</td>
                <td>Jon Doe</td>
                <td>jon@gmail.com</td>
                <td>
                    <button className="mini ui blue button">Edit</button>
                    <button className="mini ui red button">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Customer;