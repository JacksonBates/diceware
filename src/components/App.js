import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';
import Result from './Result';

import '../styles/App.css';
import 'spectre.css/dist/spectre.min.css';

import passphraseGen from '../utils/passphraseGen';

class App extends Component {
  state = {
    numberOfWords: 0,
    passphrase: '',
  }

  handleChange = (e) => {
    this.setState({numberOfWords: e.currentTarget.value})
  }
  handleClick = () => {
    const passphrase = passphraseGen(this.state.numberOfWords);
    this.setState({passphrase})
  }

  render() {
    const { passphrase } = this.state;
    
    return (
      <div className="container grid-sm">
        <Header />
        <Form onChange={this.handleChange} onClick={this.handleClick} />
        <Result passphrase={passphrase} />
      </div>
    );
  }
}

export default App;
