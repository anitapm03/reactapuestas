import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink, Navigate } from 'react-router-dom';
import loading from '../assets/images/loading.gif';

export default class Jugadores extends Component {

    urlApi = Global.urlApi;

    state = {
        jugadores: [],
        status: false
    }

    componentDidMount = () => {
        this.loadJugadores();
    }

    loadJugadores = () => {
        var request = "api/jugadores/jugadoresequipos/" + this.props.idequipo;

        axios.get(this.urlApi + request).then(response => {
            this.setState({
                jugadores: response.data,
                status: true
            })
        })
    }
  render() {
    return (
      <div>
        <h1>Jugadores</h1>
        <NavLink className='btn btn-success' to={"/equipo/" + this.props.idequipo}>Volver</NavLink>

        <table className='table table-info'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Imagen</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status == true ?
                    (
                        this.state.jugadores.map((jugador,index) => {
                            return(<tr key={index}>
                                <td>{jugador.nombre}</td>
                                <td><img src={jugador.imagen} style={{width:"150px", height: "150px"}} /></td>
                                <td><NavLink to={"/detalle/" + jugador.idJugador} className='btn btn-outline-info'>Detalles</NavLink></td>
                            </tr>)
                        })
                    ):
                    (<img src={loading} style={{with:"300px", height: "300px"}}/>)
                }
            </tbody>
        </table>

      </div>
    )
  }
}
