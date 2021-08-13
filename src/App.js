import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: 0
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(key){
    let newInput = document.getElementById(key).textContent;
    console.log(newInput);
    // console.log(this.state.input);
    this.setState({
      //  input: document.getElementById(key).textContent
      input: [...this.state.input, newInput]
    })

  }

  render(){
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
          <div class="formulaScreen"></div>
          <div class="outputScreen" id="display">{this.state.input}</div>
          
          <div id="number-plate">
            <button id="clear" className="jumbo">AC</button>
            <button id="divide" onClick={() => this.handleInput('divide')}>/</button>
            <button id="multiply" onClick={() => this.handleInput('multiply')}>x</button>
            <button id="seven" onClick={() => this.handleInput('seven')}>7</button>
            <button id="eight" onClick={() => this.handleInput('eight')}>8</button>
            <button id="nine" onClick={() => this.handleInput('nine')}>9</button>
            <button id="subtract" onClick={() => this.handleInput('subtract')}>-</button>
            <button id="four" onClick={() => this.handleInput('four')}>4</button>
            <button id="five" onClick={() => this.handleInput('five')}>5</button>
            <button id="six" onClick={() => this.handleInput('six')}>6</button>
            <button id="add" onClick={() => this.handleInput('add')}>+</button>
            <button id="one" onClick={() => this.handleInput('one')}>1</button>
            <button id="two" onClick={() => this.handleInput('two')}>2</button>
            <button id="three" onClick={() => this.handleInput('three')}>3</button>
            <button id="decimal" onClick={() => this.handleInput('decimal')}>.</button>
            <button id="zero" className="jumbo" onClick={() => this.handleInput('zero')}>0</button>
            <button id="equals" style={{backgroundColor: '#1c4467'}} className="jumbo">=</button>
          </div>
      </div>
    </div>
  );
  }
}

export default App;
