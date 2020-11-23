import React, { Component } from 'react';
import {Helmet} from "react-helmet";

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Error 404 - AG.com</title>
                </Helmet>
                <h1>Pagina non trovata</h1>
            </div>
        );
    }
}

export default PageNotFound;