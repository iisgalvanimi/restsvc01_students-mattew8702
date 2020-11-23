import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Aggiorna extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            nome:"",
            memoria:"",
            msg:""
        };
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Aggiorna - AG.com</title>
                </Helmet>
                <h1><b>Aggiorna le informazioni di un PC</b></h1><br></br>
                <h3>Uri: {this.props.uri}</h3>
                <Form onSubmit={this.invioDati}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ID del pc da modificare</Form.Label>
                        <Form.Control name="id" value={this.state.id} onChange={this.cambiamento} type="text" placeholder="Inserisci ID" />
                        <Form.Text className="text-muted">
                        Inserisci l'id numerico riferito al PC da modificare
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nuovo nome del PC</Form.Label>
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
        if (this.state.id!=="" && this.state.nome!=="" && this.state.memoria!==""){
            this.fetchRest(this.state.id)
        }
        
    }

    fetchRest(id){
        let uri = "http://161.97.114.50:9096/api/pc/"+id
        fetch(uri, {
            method: "put",
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
            this.setState({id:this.state.id, nome:this.state.nome, memoria:this.state.memoria, msg:data.msg})
        });
    }

}

export default Aggiorna;