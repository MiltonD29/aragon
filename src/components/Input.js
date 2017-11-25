import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/css/Input.css'

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    }
  }
  render(){
    let { type, placeholder, icon, style } = this.props;
    return(
      <div className="form-group">
          {/* <span className={ icon }></span> */}
          <input
            type={ type}
            placeholder={ placeholder }
            value={ this.state.value }
            onChange={ (e) => { this.setState({ value: e.target.value }) }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"/>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

export default Input;
