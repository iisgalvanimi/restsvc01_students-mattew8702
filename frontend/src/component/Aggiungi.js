import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Aggiungi extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            nome:undefined,
            memoria:undefined,
        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>Aggiungi - AG.com</title>
                </Helmet>
                <h1>aggiungi</h1>
            </div>
        );
    }
}

export default Aggiungi;