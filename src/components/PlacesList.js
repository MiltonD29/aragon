import React, { Component } from 'react';

import Place from './Place';

import '../styles/css/PlacesList.css';


let places = [
  {
    id:1,
    nombre:'Museo MARCO',
    descripcion:'Vive la experiencia del arte en uno de los centros culturales más importantes de. . .',
    direccion:' Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/marco.jpg',
    rating:0,
    path:'/museo-marco'
  },
  {
    id:2,
    nombre:'Museo del Acero Horno 3',
    descripcion:'Sitio histórico y emblemático de la grandeza industrial de la ciudad de Monterrey. . .',
    direccion:' Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/horno-3.jpg',
    rating:0,
    path:'/museo-del-acero'
  },
  {
    id:3,
    nombre:'Planetario Alfa',
    descripcion:'Centro enfocado en ciencia y tecnología que busca fomentar el aprendizaje y desarrollo. . .',
    direccion:' San Pedro Garza García, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/planetario.jpg',
    rating:0,
    path:'/planetario-alfa'
  },
  {
    id:4,
    nombre:'Bahia Escondida',
    descripcion:'Bahía Escondida rodeado de hermosas montañas y con una vista panorámica. . .',
    direccion:' Santiago, Nuevo León.',
    categoria:'Parques naturales',
    foto:'assets/images/bahia.jpg',
    rating:0,
    path:'/bahia-escondida'
  },
  {
    id:5,
    nombre:'Bosque Mágico Coca-Cola',
    descripcion:'Bosque Mágico Parques de Diversiones es uno de los mejores centros de diversi. . .',
    direccion:'Guadalupe, Nuevo León',
    categoria:'Parques de diversiones',
    foto:'assets/images/bosque.png',
    rating:0,
    path:'/bosque-magico'
  },
  {
    id:6,
    nombre:'Grutas de García',
    descripcion:'Son consideradas como uno de los atractivos naturales más importantes de. . .',
    direccion:'García, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/grutas-garcia.jpg',
    rating:0,
    path:'/grutas-garcia'
  },
  {
    id:7,
    nombre:'Parque ecológico La Huasteca',
    descripcion:'El Parque Ecológico La Huasteca es famoso por sus bellas montañas y es el lugar. . .',
    direccion:'Santa Catarina, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/huasteca.jpg',
    rating:0,
    path:'/la-huasteca'
  },
  {
    id:8,
    nombre:'Parque Plaza Sésamo',
    descripcion:'Destino apto para familias con temática de Plaza Sésamo; cuenta con juegos mecánicos y un. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Parques de diversiones',
    foto:'assets/images/plaza-sesamo.jpg',
    rating:0,
    path:'/plaza-sesamo'
  },
  {
    id:9,
    nombre:'Barrio Antiguo',
    descripcion:'El centro histórico de Monterrey está rodeado de calles empedradas, encantadoras. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Lugares históricos',
    foto:'assets/images/barrio.jpg',
    rating:0,
    path:'/barrrio-antiguo'
  },
  {
    id:10,
    nombre:'Museo de Historia Mexicana',
    descripcion:'El Museo de Historia Mexicana es la exhibición histórica más importante en el norte. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/museo-historia.jpg',
    rating:0,
    path:'/museo-historia'
  },
  {
    id:11,
    nombre:'Museo del Palacio',
    descripcion:'En la actualidad su planta baja alberga al Museo del Palacio que surge de la iniciativa del Gob . . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/museo-palacio.jpg',
    rating:0,
    path:'/museo-palacio'
  },
  {
    id:12,
    nombre:'Museo del Noreste',
    descripcion:'Ligado al Museo de Historia Mexicana a través de un puente, MUNE proyecta en su montaje. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Museos',
    foto:'assets/images/museo-noreste.jpg',
    rating:0,
    path:'/museo-noreste'
  },
  {
    id:13,
    nombre:'Obispado',
    descripcion:'El Obispado es uno de los monumentos históricos más antiguos del noreste de México y un. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Lugares históricos',
    foto:'assets/images/obispado.jpg',
    rating:0,
    path:'/obispado'
  },
  {
    id:14,
    nombre:'Grutas de Bustamante',
    descripcion:'Atrévete a hacer un interesante recorrido en el interior de una cueva llena de formaciones. . .',
    direccion:'Bustamante, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/grutas-bustamante.jpg',
    rating:0,
    path:'/grutas-bustamante'
  },
  {
    id:15,
    nombre:'Parque Natural La Estanzuela',
    descripcion:'En este parque puedes disfrutar con tu familia de la naturaleza rodeado de cañones y. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/estanzuela.jpg',
    rating:0,
    path:'/estanzuela'
  },
  {
    id:16,
    nombre:'Bioparque Estrella',
    descripcion:'Bioparque Estrella es un parque ecológico dedicado al cuidado y conservación de la naturaleza. . .',
    direccion:'Montemorelos, Nuevo León',
    categoria:'Zoologicos',
    foto:'assets/images/bioparque.jpg',
    rating:0,
    path:'/bioparque'
  },
  {
    id:17,
    nombre:'Parque Ecológico Chipinque',
    descripcion:'Coloquialmente llamado la "M", es la figura rocosa localizada en el borde superior de la. . .',
    direccion:'Monterrey, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/chipinque.jpg',
    rating:0,
    path:'/chipinque'
  },
  {
    id:18,
    nombre:'Xenpal',
    descripcion:'Más que un zoológico un espacio donde la naturaleza está más viva que nunca ya que alberga. . .',
    direccion:'García, Nuevo León',
    categoria:'Zoologicos',
    foto:'assets/images/xenpal.jpg',
    rating:0,
    path:'/xenpal'
  },
  {
    id:19,
    nombre:'Cañón de "La Boca"',
    descripcion:'Aquí se localiza la cueva de los murciélagos, también conocida como la cueva de Agapito Treviño. . .',
    direccion:'Santiago, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/cueva-murcielagos.png',
    rating:0,
    path:'/canon-la-boca'
  },
  {
    id:20,
    nombre:'Presa de la Boca',
    descripcion:'Lugar en donde se practican deportes extremos y acuáticos, principalmente los recorridos en. . .',
    direccion:'Santiago, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/presa-boca.jpg',
    rating:0,
    path:'/presa-boca'
  },
  {
    id:21,
    nombre:'Nido de los Aguiluchos',
    descripcion:'Es un tour a un enorme agujero Dentro de la Huasteca que atraviesa la montaña. Se encuentra entre . . .',
    direccion:'Santa Catarina, Nuevo León',
    categoria:'Parques naturales',
    foto:'assets/images/nido-aguiluchos.jpg',
    rating:0,
    path:'/nido-aguiluchos'
  }
]

class PlacesList extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      labelLegend:'No se encontraron resultados para: ',
      topPlaces:[]
    };
    this.recommendation = this.recommendation.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.topPlaces = this.topPlaces.bind(this);
  }




  updateRating(id, rating){
    let indexToUpdate;
    let placeToUpdate;
    places.map((place, index) => {
      if(id === place.id ){
        indexToUpdate = index;
      }
    });
    placeToUpdate = places[indexToUpdate];
    placeToUpdate.rating = rating;
    delete places[indexToUpdate];
    console.log(indexToUpdate);
    places.push(placeToUpdate);
    console.log(places);
    this.topPlaces();
  }


  // Passing in event to allow access to whatevever is typed into the textbox
  updateSearch(event) {
    this.setState({
      //limite de caracteres: 50
      search: event.target.value.substr(0, 50)
    });
    //console.log(this.state.search); // this will show the previous value of state.
  }


  recommendation() {
    if (this.state.search != '') {
      console.log(this.recommendedPlaces);
      return this.recommendedPlaces.map((placeR, index) => {
        return <Place place={placeR} key={placeR.nombre+index} />
        })
      } else {
        return <label>{this.state.labelLegend + this.state.search}</label>
      }
    }

    topPlaces(){
      let topPlaces = places.filter(
        (place) => {
          return place.rating >= 4;
        }
      );
      console.log(topPlaces);
      topPlaces = topPlaces.map((place, index)=>{
        return <Place place={place} key={place.nombre+index} />
      })
      this.setState({topPlaces})
    }

  render(){


    this.filteredPlaces = places.filter(
      (place) => {
        //Use includes looks cleaner and should be easier to remember.
        //return place.categoria.toLowerCase().indexOf(this.state.search.toLowerCase()) !=-1;
        //return place.categoria.toLowerCase().includes(this.state.search.toLowerCase());

        return place.nombre.toLowerCase().includes(this.state.search.toLowerCase());
      }
    );

    let categorias = [];

    // categorias = filteredPlaces.map((place) => {
    //   if (categorias.indexOf(place.categoria)===-1) {
    //     return place.categoria
    //   }
    // });

    for (var i = 0; i < this.filteredPlaces.length; i++) {
         if (categorias.indexOf(this.filteredPlaces[i].categoria)===-1) {
          categorias.push(this.filteredPlaces[i].categoria)
        }
    }

    console.log(categorias);

    this.recommendedPlaces = categorias.map(
      (categoria) => {
        return places.filter((place)=> place.categoria===categoria)
        //return place.categoria.toLowerCase().includes(this.state.search.toLowerCase());
      }
    );

    this.recommendedPlaces = this.recommendedPlaces.reduce((sumArray=[], currentValue) => [...sumArray, ...currentValue], [])
    console.log(this.recommendedPlaces);

    return(
      <div>
        <div>
          <div className="label">
            <label>Buscar lugares</label>
            <input placeholder="Buscar..."
                   className="form-control"
                   id="example-search-input"
                   type="search"
                   value={this.state.search}
                   onChange={this.updateSearch.bind(this)} />
            </div>
          </div>

          <hr />
          <h1 className="lugares-title">Lugares turísticos de Nuevo León</h1>
          <div className="places">
            {this.filteredPlaces.map((place, index) => {
              return <Place place={place} key={place.nombre+index} updateRating={this.updateRating} />
            })}

          </div>

          <br/>
          <h2 className="lugares-recomendados" >Te podria interesar...</h2>
          <div className="places">
            {this.recommendation()}
          </div>

          <h2 className="lugares-recomendados" >Te recomendamos los mejores calificados:</h2>
          <div className="places">
            {this.state.topPlaces}
          </div>
      </div>
    );
  }
}
export default PlacesList;
