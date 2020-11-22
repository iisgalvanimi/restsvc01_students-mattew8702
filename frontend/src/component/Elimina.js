import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Helmet} from "react-helmet";

class Elimina extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            msg:undefined
        };
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Elimina - AG.com</title>
                </Helmet>
                <h1>Elimina un PC</h1>
                <h3>Uri: {this.props.uri}</h3>
                <Form onSubmit={this.invioDati}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ID del Pc</Form.Label>
                        <Form.Control name="id" value={this.state.id} onChange={this.cambiamento} type="text" placeholder="Inserisci ID" />
                        <Form.Text className="text-muted">
                        Inserisci l'id numerico riferito al PC da eliminare
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Conferma ID
                    </Button>
                    <h1>{this.state.msg}</h1>
                </Form>
            </div>
        );
    }

    fetchRest(id){
        fetch("http://161.97.114.50:9096/api/cancellaPc/"+id, {
            method: 'DELETE',})
        .then(resp => resp.json())
        .then(data => {
            this.setState({id:this.state.id, msg:data.msg})
        });
    }

    cambiamento = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    invioDati = e =>{
        e.preventDefault()
        if (this.state.id!==""){
            this.fetchRest(this.state.id)
            this.setState({id:"", msg:this.state.msg})
        }
        
    }
}

export default Elimina;