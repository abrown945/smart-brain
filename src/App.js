import React, {Component} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import {apiKey} from './api/apiKey';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
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
    imageURL: '',
    box: {},
    route: 'signin'
  }

  calculateFaceBox = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({imageURL: this.state.input});

    clarifai.models
    .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceBox(response)))
      .catch(err =>console.log(err))
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions} />
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'signin' 
        ? <SignIn 
              onRouteChange={this.onRouteChange}/> 
        : <div>
              <Logo />
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
              />
              <FaceRecognition
                imageURL={this.state.imageURL}
                box={this.state.box}
              />
          </div>
        }
      </div>
    );
  }
}

export default App;
