import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import {Helmet} from "react-helmet";

class PrelevaTutto extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabelle:[]
        };
        this.fetchRest();
    }
    render() {
        return (
            <div className="container">
                <Helmet>
                    <title>PCs - AG.com</title>
                </Helmet>
                <h1><b>PC disponibili in magazzino</b><br/></h1><h3>Uri: {this.props.uri}</h3>
                {PrelevaTutto.renderPc(this.state.tabelle)}
            </div>
        );
    }

    fetchRest(){
       fetch("http://161.97.114.50:9096/api/tuttiPc")
       .then(resp => resp.json())
       .then(data => {
           this.setState({tabelle: data});
       });
    }

    static renderPc(tabelle){
        return (
            <div className="row">
                {tabelle.map(tabella =>
                    
                <div key={tabella.id} className="col-sm">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="pc.jpg" />
                        <Card.Body>
                            <Card.Title>ID: {tabella.id} <br></br> Nome: {tabella.nome}</Card.Title>
                            <Card.Text>
                            Memoria: {tabella.memoria}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                )}
                
            </div>
        )
    }
}

export default PrelevaTutto;