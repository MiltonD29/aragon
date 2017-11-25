import React, { Component } from 'react';

import '../styles/Cards.css';

let lugaresArray = [
  {
    nombre:'Museo MARCO',
    descripcion:'Vive la experiencia del arte en uno de los centros culturales más importantes de...',
    direccion:' Monterrey, Nuevo León',
    categoria:'',
    foto:'assets/images/marco.jpg',
    rating:''
  },
  {
    nombre:'Museo del Acero Horno 3',
    descripcion:'Sitio histórico y emblemático de la grandeza industrial de la ciudad de Monterrey...',
    direccion:' Monterrey, Nuevo León',
    categoria:'',
    foto:'assets/images/horno-3.jpg',
    rating:''
  },
  {
    nombre:'Planetario Alfa',
    descripcion:'Centro enfocado en ciencia y tecnología que busca fomentar el aprendizaje y desarrollo...',
    direccion:' San Pedro Garza García, Nuevo León',
    categoria:'',
    foto:'assets/images/planetario.jpg',
    rating:''
  },
  {
    nombre:'Bahía Escondida',
    descripcion:'Bahía Escondida rodeado de hermosas montañas y con una vista panorámica...',
    direccion:' Santiago, Nuevo León.',
    categoria:'Parques Naturales',
    foto:'assets/images/bahia.jpg',
    rating:5
  },
  {
    nombre:'Bosque Mágico Coca-Cola',
    descripcion:'',
    direccion:'',
    categoria:'',
    foto:'assets/images/bosque.png',
    rating:''
  },
  {
    nombre:'Grutas de García',
    descripcion:'',
    direccion:'',
    categoria:'',
    foto:'assets/images/grutas-garcia.jpg',
    rating:''
  },
  {
    nombre:'Parque ecológico La Huasteca',
    descripcion:'',
    direccion:'',
    categoria:'',
    foto:'assets/images/huasteca.jpg',
    rating:''
  },
  {
    nombre:'Parque Plaza Sésamo',
    descripcion:'',
    direccion:'',
    categoria:'',
    foto:'assets/images/plaza-sesamo.jpg',
    rating:''
  },
  {
    nombre:'Barrio Antiguo',
    descripcion:'',
    direccion:'',
    categoria:'',
    foto:'assets/images/barrio.jpg',
    rating:''
  }
]

class Cards extends Component {

  getLugares(){
    let lugares = lugaresArray.map((currentValue, index, key) => {
      return(
        <div className="card">

          <div className="img">
            <img src={currentValue.foto}/>
          </div>

          <h4>{currentValue.nombre}</h4>
          <p>{currentValue.descripcion}</p>
          <p className="direccion"><span className="fa fa-location-arrow"></span>{currentValue.direccion}</p>
          <a className="ver-mas"><b>Ver más</b></a>
        </div>
      );
    });
    return(
      <div className="lugares">
        { lugares }
      </div>
    );
  }

  render(){
    return(
      <div>
        {this.getLugares()}
      </div>
    );
  }
}

export default Cards;
