import React, { Component } from 'react'
import Spinner from './Spinner';

export class Home extends Component {
  render() {
    document.title = "PETUK-RESTORA"
    return (
      <div className='container'>
        <div className="row row-content">
          Home
        </div>
      </div>
    )
  }
}

export default Home;