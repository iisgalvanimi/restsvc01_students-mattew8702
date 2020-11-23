import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Aggiungi extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome:"",
            memoria:"",
            msg:""
        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>Aggiungi - AG.com</title>
                </Helmet>
                <h1>Aggiungi un Pc</h1><br></br>
                <h3>Uri: {this.props.uri}</h3>
                <Form onSubmit={this.invioDati}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome del PC</Form.Label>
                        <Form.Control name="nome" value={this.state.nome} onChange={this.cambiamento} type="text" placeholder="Inserisci Nome" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Memoria aggiornata</Form.Label>
                        <Form.Control name="memoria" value={this.state.memoria} onChange={this.cambiamento} type="text" placeholder="Inserisci la memoria" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Conferma 
                    </Button>
                    <br></br>
                    <h3>{this.state.msg}</h3>
                   
                </Form>
            </div>
        );
    }

    cambiamento = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    invioDati = e =>{
        e.preventDefault()
        if (this.state.nome!=="" && this.state.memoria!==""){
            this.fetchRest()
            this.setState({nome:"", memoria:"", msg:this.state.msg})
        }
        
    }

    fetchRest(){
        let uri = "http://161.97.114.50:9096/api/pc/"
        fetch(uri, {
            method: "post",
            headers: new Headers({
            "Content-Type": "application/json"
            }),
            body: JSON.stringify({
            nome: this.state.nome,
            memoria: this.state.memoria
            })
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({nome:this.state.nome, memoria:this.state.memoria, msg:data.msg})
            console.log(this.state.msg)
        });
    }
}

export default Aggiungi;