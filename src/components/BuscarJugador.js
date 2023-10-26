import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink, Navigate } from 'react-router-dom';
import loading from '../assets/images/loading.gif';

export default class BuscarJugador extends Component {

    urlApi = Global.urlApi;

    state = {
        jugadores: [],
        status: false
    }

    componentDidMount = () => {
        this.loadJugador();
    }

    loadJugador = () => {

        var request = "api/jugadores/buscarjugadores/" + this.props.nombre;

        axios.get(this.urlApi+request).then(response => {
            this.setState({
                jugadores: response.data,
                status: true
            })
           
        })

    }

    //HAY QUE ARREGLARLO PORQUE NO DEVUELVE UN OBJ SINO QUE UN ARRAY, HAY QUE HACER UN MAP

  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle '>
        <h1>Detalles del jugador: {this.props.nombre}</h1>
        {
            this.state.status == true ?
            (<div>
                <h1>{this.state.jugadores[0].posicion}</h1>
                <h2>{this.state.jugador.nombre}</h2>
                <img src={this.state.jugador.imagen} style={{width:"150px", height: "150px"}} />
                <h3>{this.state.jugador.posicion}</h3>
                <h3>Fecha de nacimiento: {this.state.jugador.fechaNacimiemto}</h3>
                <h5>País: {this.state.jugador.pais}</h5>
                <NavLink to={"/"} className='btn btn-outline-info'>Volver</NavLink>
            </div>):
            (<img src={loading} style={{with:"300px", height: "300px"}}/>)
        }
      </div>
    )
  }
}
