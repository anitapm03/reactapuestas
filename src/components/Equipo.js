import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink, Navigate } from 'react-router-dom';
import loading from '../assets/images/loading.gif';

export default class Equipo extends Component {


    url = Global.urlApi;

    state = {
        equipo: {},
        status: false
    }

    componentDidMount = () => {
        this.loadEquipo();
    }

    loadEquipo = () => {
        var request = "api/equipos/" + this.props.idequipo;

        axios.get(this.url+request).then(response => {
            this.setState({
                equipo: response.data,
                status: true
            })
        })
    }

  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle '>
        <h1>Equipo: {this.props.idequipo}</h1>
        {
            this.state.status == true ?
            (
                <div >
                    <img src={this.state.equipo.imagen} style={{width:"150px", height: "150px"}}/>
                    <h3 style={{color: "green"}}>{this.state.equipo.nombre}</h3>
                    <h5>Numero de champions: {this.state.equipo.champions}</h5>
                    <a className='btn btn-outline-info' href={this.state.equipo.web}>Web oficial</a>
                    <p>{this.state.equipo.descripcion}</p>
                    <br></br>
                    <h3>Finalista: {this.state.equipo.finalista}</h3>

                    <NavLink to={"/jugadores/" + this.props.idequipo} className='btn btn-success'>Jugadores</NavLink>
                    <NavLink to="/" className='btn btn-info'>Volver</NavLink>
                </div>
            ):
            (<img src={loading} style={{with:"300px", height: "300px"}}/>)
        }

        
      </div>
    )
  }
}
