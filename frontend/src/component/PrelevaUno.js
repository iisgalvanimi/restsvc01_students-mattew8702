import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Helmet} from "react-helmet";

class PrelevaUno extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            nome:undefined,
            memoria:undefined,
            msg:undefined
        };
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>Pc - AG.com</title>
                </Helmet>
                <h1>Preleva un PC</h1><br/><h3>Uri: {this.props.uri}</h3>
                <Form onSubmit={this.invioDati}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ID del Pc</Form.Label>
                        <Form.Control name="id" value={this.state.id} onChange={this.cambiamento} type="text" placeholder="Inserisci ID" />
                        <Form.Text className="text-muted">
                        Inserisci l'id numerico riferito al PC da visualizzare
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Conferma ID
                    </Button>
                    {PrelevaUno.renderPc(this.state.nome, this.state.memoria)}
                    <h1>{this.state.msg}</h1>
                </Form>
            </div>
        );
    }

    fetchRest(id){
        fetch("http://161.97.114.50:9096/api/unPc/"+id)
        .then(resp => resp.json())
        .then(data => {
            this.setState({id:this.state.id, nome:data.nome, memoria:data.memoria, msg:data.msg})
        });
    }

    static renderPc(nome, memoria){
        return (
            nome !== undefined &&(
                memoria !== undefined &&(
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="pc.jpg" />
                        <Card.Body>
                            <Card.Title>Nome: {nome}</Card.Title>
                            <Card.Text>
                            Memoria: {memoria}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            )
        )
    }
    cambiamento = e =>{
        this.setState({[e.target.name]:e.target.value})
    }

    invioDati = e =>{
        e.preventDefault()
        if (this.state.id!==""){
            this.fetchRest(this.state.id)
            this.setState({id:"", nome:this.state.nome, memoria:this.state.memoria, msg:this.state.msg})
        }
        
    }
}

export default PrelevaUno;