import './App.css';
import {Route, Switch} from 'react-router-dom'
import BarraInferiore from './component/BarraInferiore'
import BarraSuperiore from './component/BarraSuperiore'
import Home from './component/Home'
import PrelevaTutto from './component/PrelevaTutto'
import PrelevaUno from './component/PrelevaUno'
import Aggiorna from './component/Aggiorna'
import Elimina from './component/Elimina'
import Aggiungi from './component/Aggiungi'
import PageNotFound from './component/PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BarraSuperiore></BarraSuperiore>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/prelevaTutto" component={() => <PrelevaTutto uri={"/api/tuttiPc"} />}/>
        <Route exact path="/prelevaUno" component={() => <PrelevaUno uri={"/api/unPc/<id>"} />}/>
        <Route exact path="/aggiornaPc" component={() => <Aggiorna uri={"/api/aggiornaPc/<id>"} />}/>
        <Route exact path="/elimina" component={() => <Elimina uri={"/api/cancellaPc/<id>"} />}/>
        <Route exact path="/aggiungi" component={() => <Aggiungi uri={"/api/nuovoPc"} />}/>
        <Route path="*" component={PageNotFound}/>
      </Switch>
      <BarraInferiore></BarraInferiore>
    </div>
  );
}

export default App;
