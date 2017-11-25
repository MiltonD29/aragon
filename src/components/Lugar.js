import React, { Component } from 'react';

let places = [
  {
    nombre:'Museo MARCO',
    descripcion:'Vive la experiencia del arte en uno de los centros culturales más importantes de. . .',
    direccion:' Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/marco.jpg',
    rating:'',
    path:'/museo-marco'
  },
  {
    nombre:'Museo del Acero Horno 3',
    descripcion:'Sitio histórico y emblemático de la grandeza industrial de la ciudad de Monterrey. . .',
    direccion:' Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/horno-3.jpg',
    rating:'',
    path:'/museo-del-acero'
  },
  {
    nombre:'Planetario Alfa',
    descripcion:'Centro enfocado en ciencia y tecnología que busca fomentar el aprendizaje y desarrollo. . .',
    direccion:' San Pedro Garza García, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/planetario.jpg',
    rating:'',
    path:'/planetario-alfa'
  },
  {
    nombre:'Bahia Escondida',
    descripcion:'Bahía Escondida rodeado de hermosas montañas y con una vista panorámica. . .',
    direccion:' Santiago, Nuevo León.',
    categoria:'Parques naturales',
    foto:'assets/images/bahia.jpg',
    rating:'',
    path:'/bahia-escondida'
  },
  {
    nombre:'Bosque Mágico Coca-Cola',
    descripcion:'Bosque Mágico Parques de Diversiones es uno de los mejores centros de diversi. . .',
    direccion:'Guadalupe, Nuevo León',
    categoria:'Parques de diversiones',
    foto:'assets/images/bosque.png',
    rating:'',
    path:'/bosque-magico'
  },
  {
    nombre:'Grutas de García',
    descripcion:'Son consideradas como uno de los atractivos naturales más importantes de. . .',
    direccion:'García, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/grutas-garcia.jpg',
    rating:'',
    path:'/grutas-garcia'
  },
  {
    nombre:'Parque ecológico La Huasteca',
    descripcion:'El Parque Ecológico La Huasteca es famoso por sus bellas montañas y es el lugar. . .',
    direccion:'Santa Catarina, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/huasteca.jpg',
    rating:'',
    path:'/la-huasteca'
  },
  {
    nombre:'Parque Plaza Sésamo',
    descripcion:'Destino apto para familias con temática de Plaza Sésamo; cuenta con juegos mecánicos y un. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Parques de diversiones',
    foto:'assets/images/plaza-sesamo.jpg',
    rating:'',
    path:'/plaza-sesamo'
  },
  {
    nombre:'Barrio Antiguo',
    descripcion:'El centro histórico de Monterrey está rodeado de calles empedradas, encantadoras. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Lugares históricos',
    foto:'assets/images/barrio.jpg',
    rating:'',
    path:'/barrrio-antiguo'
  },
  {
    nombre:'Museo de Historia Mexicana',
    descripcion:'El Museo de Historia Mexicana es la exhibición histórica más importante en el norte. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/museo-historia.jpg',
    rating:'',
    path:'/museo-historia'
  },
  {
    nombre:'Museo del Palacio',
    descripcion:'En la actualidad su planta baja alberga al Museo del Palacio que surge de la iniciativa del Gob . . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/museo-palacio.jpg',
    rating:'',
    path:'/museo-palacio'
  },
  {
    nombre:'Museo del Noreste',
    descripcion:': Ligado al Museo de Historia Mexicana a través de un puente, MUNE proyecta en su montaje. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/museo-noreste.jpg',
    rating:'',
    path:'/museo-noreste'
  },
  {
    nombre:'Obispado',
    descripcion:'El Obispado es uno de los monumentos históricos más antiguos del noreste de México y un. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'',
    foto:'assets/images/obispado.jpg',
    rating:'',
    path:'/obispado'
  },
  {
    nombre:'Grutas de Bustamante',
    descripcion:'Atrévete a hacer un interesante recorrido en el interior de una cueva llena de formaciones. . .',
    direccion:'Bustamante, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/grutas-bustamante.jpg',
    rating:'',
    path:'/grutas-bustamante'
  },
  {
    nombre:'Parque Natural La Estanzuela',
    descripcion:'En este parque puedes disfrutar con tu familia de la naturaleza rodeado de cañones y. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/estanzuela.jpg',
    rating:'',
    path:'/estanzuela'
  },
  {
    nombre:'Bioparque Estrella',
    descripcion:'Bioparque Estrella es un parque ecológico dedicado al cuidado y conservación de la naturaleza. . .',
    direccion:'Montemorelos, Nuevo León',
    categoria:'Zoologicos',
    foto:'assets/images/bioparque.jpg',
    rating:'',
    path:'/bioparque'
  },
  {
    nombre:'Parque Ecológico Chipinque',
    descripcion:'Coloquialmente llamado la "M", es la figura rocosa localizada en el borde superior de la. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/chipinque.jpg',
    rating:'',
    path:'/chipinque'
  },
  {
    nombre:'Xenpal',
    descripcion:'Más que un zoológico un espacio donde la naturaleza está más viva que nunca ya que alberga. . .',
    direccion:'García, Nuevo León',
    categoria:'Zoologicos',
    foto:'assets/images/xenpal.jpg',
    rating:'',
    path:'/xenpal'
  },
  {
    nombre:'Cañón de "La Boca"',
    descripcion:'Aquí se localiza la cueva de los murciélagos, también conocida como la cueva de Agapito Treviño. . .',
    direccion:'Santiago, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/cueva-murcielagos.png',
    rating:'',
    path:'/canon-la-boca'
  },
  {
    nombre:'Presa de la Boca',
    descripcion:'Lugar en donde se practican deportes extremos y acuáticos, principalmente los recorridos en. . .',
    direccion:'Santiago, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/presa-boca.jpg',
    rating:'',
    path:'/presa-boca'
  },
  {
    nombre:'Nido de los Aguiluchos',
    descripcion:'Es un tour a un enorme agujero Dentro de la Huasteca que atraviesa la montaña. Se encuentra entre . . .',
    direccion:'Santa Catarina, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/nido-aguiluchos.jpg',
    rating:'',
    path:'/nido-aguiluchos'
  }
]

class Lugar extends Component {

  getLugares(){
    let lugares = places.map((currentValue, index, key) => {
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
export default Lugar;
