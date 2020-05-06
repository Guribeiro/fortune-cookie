import React, { Component } from 'react';

import './global.css';
import './App.css';


import ImageCookie from './components/ImageCookie';
import Button from './components/Button';
import Phrase from './components/Phrase';

import cookieImage from './assets/biscoito.png';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      initialPhrase: '',

    };

    this.phrases = [
      'Os problemas são oportunidades para se mostrar o que sabe',
      'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos',
      'Tente de novo. Fracasse de novo. Mas fracasse melhor',
      'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo',
      'O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido',
      'Cada cliente é como se fosse primeiro e único',
      'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer'
    ];


    this.changeMessage = this.changeMessage.bind(this);

  }

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  changeMessage() {
    let state = this.state;
    /**
     let phrasesAmount = this.phrases.length
     let phrasesMinValue = phrasesAmount - phrasesAmount
     let randomPhrase = this.randomInt(phrasesMinValue, phrasesAmount)
     * 
     */
    let random = Math.floor(Math.random() * this.phrases.length);
    state.initialPhrase =  ` "${this.phrases[random]}"`
    this.setState(state)
  }

  render() {
    return (
      <div>
        <ImageCookie
          img={cookieImage}

        />
        <Button
          name='Abrir Biscoito'
          changeMessage={this.changeMessage}
        />
        
        <h3>{this.state.initialPhrase}</h3>
    
        <Phrase
          phrase={this.state.initialPhrase}

        />
      </div>
    );
  }
}

export default App;