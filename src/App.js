import React, {Component} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import {apiKey} from './api/apiKey';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';



//particle settings
const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }


//enables use of clarifai
const clarifai = new Clarifai.App({ apiKey: apiKey})


class App extends Component {
  state = {
    input: '',
    imageURL: ''
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input})
    clarifai.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
      this.state.input).then(
      function (response) {
       console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function (err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions} />
        <Navigation/>
        <Logo/>
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
    );
  }
}

export default App;
