import React, {Component} from 'react';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';


import '../styles/css/Place.css';

class Place extends Component {


  render(){
    const ratingChanged = (newRating) => {
      this.props.updateRating(this.props.place.id, newRating);
      console.log(newRating);
    }

    var style = {
      textAlign:'center'
    }

    return(

      <div>
        <div className="card">

          <div className="img">
            <img src={this.props.place.foto}/>
          </div>

          <h4 style={style}>{this.props.place.nombre}</h4>

          <div className="rating-place">
            <h6 style={{color:'#0174DF'}}>Califica este lugar</h6>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={30}
              color2={'#ffd700'}
              value={this.props.place.rating}/>
          </div>

          <p>{this.props.place.descripcion}</p>
          <p className="direccion"><span className="fa fa-location-arrow"></span>{this.props.place.direccion}</p>
          {/*<p>{this.props.place.categoria}</p>*/}


          <a style={{paddingLeft:"130px"}}><b>Ver más</b></a>
        </div>
      </div>
    );
  }
}
export default Place;
