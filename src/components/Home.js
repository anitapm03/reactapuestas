import React, { Component } from 'react';
import clasico from '../assets/images/clasico.jpg';
import Global from '../Global';

export default class Home extends Component {
  render() {
    return (
      <div className='text-center mt-5'>
        <h1>Apuestas para el Clásico</h1>
        <img src={clasico} />
        </div>
    )
  }
}
