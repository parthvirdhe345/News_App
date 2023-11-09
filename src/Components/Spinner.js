import React, { Component } from 'react'
import Ispinner from './Ispinner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Ispinner} alt="loading" />
      </div>
    ) 
  }
}
