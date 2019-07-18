import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

const particlesOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
            color: "white",
              blur: 5
        }
      }
    }
  }


const App = () => {
  return (
    <div className="App">
      <Particles className="particles"
        params={particlesOptions} />
      <Navigation/>
      <Logo/>
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
