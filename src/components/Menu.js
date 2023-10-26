import React, { Component } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import logo from "../assets/images/logo2.png";
import Global from "../Global";
import axios from 'axios';

export default class Menu extends Component {

    urlApi = Global.urlApi;

    cajaNombre = React.createRef();

    state = {
        equipos: [],
        statusEquipos: false,
        buscar:false,
        nombre: ""
    }

    componentDidMount = () => {
        this.loadEquipos();
    }

    loadEquipos = () => {
        var request = "api/equipos";

        axios.get(this.urlApi+request).then(response => {
            this.setState({
                equipos: response.data,
                statusEquipos: true
            })
        })

    }

    buscarJugador = (e) => {
        e.preventDefault();

       this.setState({
            nombre: this.cajaNombre.current.value,
            buscar:true   
       })

        
    }

  render() {
    return (
      <div>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                Inicio
                </NavLink>

                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Equipos
                </NavLink>
                <ul className="dropdown-menu">
                    {/* aqui hay que hacerlo dinámico */
                        this.state.statusEquipos == true &&
                        (
                            this.state.equipos.map((equipo, index) => {
                                return(<li key={index}><NavLink className="dropdown-item" to={"/equipo/" + equipo.idEquipo}>{equipo.nombre}</NavLink> </li>)
                            })
                        )
                    }
                    
                </ul>

                <NavLink className="navbar-brand" to="/apuestas">Apuestas</NavLink>
                <NavLink className="navbar-brand" to="/crearapuesta">Crear Apuesta</NavLink>

                <form className="d-flex" role="search" onSubmit={this.buscarJugador}>
                    <input className="form-control me-2" type="search" placeholder="Buscar jugador" aria-label="Search" ref={this.cajaNombre} />
                    <button className="btn btn-outline-success" type="submit" >Buscar</button>
                </form>
                {
                    this.state.buscar == true &&
                    (<Navigate to={"/buscarjugador/" + this.state.nombre} />)
                }
                
            </div>
        </nav>
      </div>
    )
  }
}