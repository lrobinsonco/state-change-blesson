import React, { Component } from 'react';
import './App.css';

import Image1 from './assets/img1.jpg'
import Image2 from './assets/img2.jpg'
import Image3 from './assets/img3.jpg'
import Image4 from './assets/img4.jpg'
import Image5 from './assets/img5.jpg'

const image =[Image1, Image2, Image3, Image4, Image5]
const names =["Lee", "Nara", "JU"]

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: "peaches",
      image: Image2
    }
  }

  handleClick = () => {
    let i = Math.floor(Math.random() *3)
    this.setState({name : names[i]})
  }
  
  render() {

    setTimeout(() =>{
      let i= Math.floor(Math.random() * 5)
      this.setState({image: image[i]})
    }, 6000)

    return (
      <div>

        <img src={this.state.image} className="image"></img>
        <h1 className="hello" onClick={this.handleClick}>Hello {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
