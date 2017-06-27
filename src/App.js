import React, { Component } from 'react';
import './App.css';

import Image1 from './assets/img1.jpg'
import Image2 from './assets/img2.jpg'
import Image3 from './assets/img3.jpg'
import Image4 from './assets/img4.jpg'
import Image5 from './assets/img5.jpg'


class App extends Component {
  render() {
    return (
      <div>

        <img src={Image1} className="image"></img>
        <h1 className="hello">Hello World</h1>
      </div>
    );
  }
}

export default App;
