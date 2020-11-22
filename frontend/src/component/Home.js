import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home - AG.com</title>
                </Helmet>
                <h1>Home<br/>Sito di test per il servizio Rest implementato su docker (Computers)</h1>
            </div>
        );
    }
}

export default Home;