import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    options: ['bread', 'cheese', 'tomato'],
    layers: []
  }

  addLayer = option => this.setState((prevState, props) => (
    {
      layers: [option, ...prevState.layers]
    }
  ))
  
  removeLayer = targetIndex => this.setState((prevState, props) => (
    {
      layers: prevState.layers.filter((layer, i) => i !== targetIndex)
    }
  ))

  render() {
    const { options, layers } = this.state
    return (
      <div className="App">
        <h1>burger maker</h1>
        <main className="flex-container">
          <section className="controls">
            <ul>
              {options.map((option, i) => <li key={i}>
                <button onClick={() => this.addLayer(option)}>{option}</button>
              </li>)}
            </ul>
          </section>

          <section className="dish">
            <ul className="burger">
              {layers.map((layer, i) => {
                return <li onClick={() => this.removeLayer(i)} key={i} className={layer}>
                  {layer}
                </li>
              })}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
