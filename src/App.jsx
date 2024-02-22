// componentes funcionais

import { useState } from 'react'
import viteLogo from '/vite.svg'

import Card from './Components/Card';

function App() {

  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <h1>Componentes</h1>

      <button onClick={() => setShowImage(!showImage)}>Abrir / Fechar</button>

      <div>
        {showImage && <Card />}
      </div>
      
    </>
  );
}

export default App;


/*
exemplo abaixo em componentes de classe

import React, { Component } from 'react';
import Card from './Components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false
    };
  }

  render() {
    const { showImage } = this.state;
    return (
      <>
        <h1>Componentes</h1>

        <div>
          {showImage && <Card />}
        </div>

        <button onClick={() => this.setState({ showImage: !showImage })}>Componente</button>
      </>
    );
  }
}

export default App;

*/