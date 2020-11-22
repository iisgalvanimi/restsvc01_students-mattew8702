import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class BarraSuperiore extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">AG.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/prelevaTutto">Preleva tutti i PC</Nav.Link>
                        <Nav.Link href="/prelevaUno">Preleva Un PC</Nav.Link>
                        <Nav.Link href="/aggiornaPc">Aggiorna un PC</Nav.Link>
                        <Nav.Link href="/elimina">Elimina un PC</Nav.Link>
                        <Nav.Link href="/aggiungi">Aggiungi un PC</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default BarraSuperiore;