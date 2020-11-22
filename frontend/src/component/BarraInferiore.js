import React, { Component } from 'react';
import './BarraInferiore.css'
class BarraInferiore extends Component {
    render() {
        return (
            <div>
                <div className = "container-fluid footer">
                    <div className = "row">
                        <div className = "col">
                            <div id="container" className = "pull-right">
                                <p>Realizzato da Matteo Gatti e Simone Arzani</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BarraInferiore;