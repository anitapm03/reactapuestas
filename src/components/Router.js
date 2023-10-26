import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Equipo from './Equipo';
import Jugadores from './Jugadores';
import Detalle from './Detalle';
import Apuestas from './Apuestas';
import CrearApuesta from './CrearApuesta';


export default class Router extends Component {
  render() {

    function EquipoElement() {
        var { idequipo } = useParams();
        return <Equipo idequipo={idequipo} />
    }

    function JugadoresElement() {
        var { idequipo } = useParams();
        return <Jugadores idequipo={idequipo} />
    }

    function DetalleElement() {
        var { idjugador } = useParams();
        return <Detalle idjugador={idjugador} />
    }

    return (
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/equipo/:idequipo' element={<EquipoElement />} />
        <Route path='/jugadores/:idequipo' element={<JugadoresElement />} />
        <Route path='/detalle/:idjugador' element={<DetalleElement />} />
        <Route path='/apuestas' element={<Apuestas />} />
        <Route path='/crearapuesta' element={<CrearApuesta />} />
      </Routes>
      </BrowserRouter>
    )
  }
}