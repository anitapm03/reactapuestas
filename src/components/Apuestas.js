import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink, Navigate } from 'react-router-dom';
import loading from '../assets/images/loading.gif';

export default class Apuestas extends Component {

    urlApi = Global.urlApi;

    state = {
        apuestas: [],
        status: false
    }

    componentDidMount = () => {
        this.loadApuestas();
    }

    loadApuestas = () => {

        var request = "api/apuestas";

        axios.get(this.urlApi+request).then(response =>{
            this.setState({
                apuestas: response.data,
                status: true
            })
        })

    }
  render() {
    return (
      <div>
        <h1>Apuestas</h1>
        <NavLink className='btn btn-success' to="/crearapuesta">Crear una apuesta</NavLink>

        <table className='table table-danger'>
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Resultado</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status == true ?
                    (
                        this.state.apuestas.map((apuesta,index)=>{
                            return(<tr key={index}>
                                <td>{apuesta.usuario}</td>
                                <td>{apuesta.resultado}</td>
                                <td>{apuesta.fecha}</td>
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
