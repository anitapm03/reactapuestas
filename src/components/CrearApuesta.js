import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

export default class CrearApuesta extends Component {

    urlApi = Global.urlApi;

    state = {
        statusCrear: false
    }

    cajaId = React.createRef();
    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    crearApuesta = (e) => {
        if(e!=null){
            e.preventDefault();
        }

        var request = "api/apuestas";

        var idApuesta = parseInt(this.cajaId.current.value);
        var usuario = this.cajaUsuario.current.value;
        var resultado = this.cajaResultado.current.value;
        var fecha = this.cajaFecha.current.value;

        var data = {
            idApuesta: idApuesta,
            usuario: usuario,
            resultado: resultado,
            fecha: fecha
        }

        axios.post(this.urlApi+request, data).then(response =>{
            this.setState({
                statusCrear: true
            })
            
        })

    }
    
  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle '>
        <h1>Crear Apuesta</h1>

        {
            this.state.statusCrear == true &&
            (<Navigate to="/apuestas" />)
        }

        <form>
            <label>ID: </label>
            <input type='text' className='form form-control' ref={this.cajaId}/>

            <label>Usuario: </label>
            <input type='text' className='form form-control' ref={this.cajaUsuario}/>

            <label>Resultado: </label>
            <input type='text' className='form form-control' ref={this.cajaResultado}/>

            <label>Fecha: </label>
            <input type='text' className='form form-control' ref={this.cajaFecha}/>

            <button className='btn btn-success' onClick={this.crearApuesta}>Crear!</button>
        </form>
      </div>
    )
  }
}
