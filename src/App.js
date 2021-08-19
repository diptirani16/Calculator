import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      formula: [],
      
    }
    this.handleInput = this.handleInput.bind(this);
    this.currentValue = 0;
    this.result = []
    
    this.Operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
    }
    this.handleClear = this.handleClear.bind(this);
    this.Calculate = this.Calculate.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    if(Number.isInteger(parseInt(value)) || parseFloat(value) === '.'){
      if(!Number.isInteger(this.currentValue)) this.currentValue = 0
      this.currentValue = parseFloat(this.currentValue + value.toString());
    }
    else {
      if(this.currentValue !== 0 && Number.isInteger(this.currentValue)) this.result = [...this.result, this.currentValue];
      if(!Number.isInteger(this.result[this.result.length - 1]))
        this.result[this.result.length - 1] = value
      else this.result = [...this.result, value]
      this.currentValue = value
    }
    if(value === '=') {
      this.result = this.Calculate(this.result)
      this.currentValue = this.result[this.result.length - 1]
    }
    console.log(this.currentValue)
    console.log(this.result)
    this.setState({ input: this.currentValue, formula: this.result })

  }

  Calculate(arr) {
    let currentValue = 0;
    let currentOperator = '+'
    arr.map(value => {
      if(Number.isFinite(value)) {  
        currentValue = this.Operators[currentOperator](currentValue, value) 
      } else currentOperator = value
      return 0;
    })
    return [...arr, currentValue]
  }
  


  handleClear() {
    this.currentValue = 0;
    this.result = []
    this.setState({ input: 0, formula: '' })
  }


  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="calculator">
          <div className="formulaScreen">{this.state.formula}</div>
          <div className="outputScreen" id="display">{this.state.input}</div>

          <div id="number-plate">
            <button id="clear" className="jumbo" onClick={this.handleClear}>AC</button>
            <button id="divide" onClick={this.handleInput} value="/">/</button>
            <button id="multiply" onClick={this.handleInput} value="*">x</button>
            <button id="seven" onClick={this.handleInput} value="7">7</button>
            <button id="eight" onClick={this.handleInput} value="8">8</button>
            <button id="nine" onClick={this.handleInput} value="9"> 9</button>
            <button id="subtract" onClick={this.handleInput} value="-">-</button>
            <button id="four" onClick={this.handleInput} value="4">4</button>
            <button id="five" onClick={this.handleInput} value="5">5</button>
            <button id="six" onClick={this.handleInput} value="6">6</button>
            <button id="add" onClick={this.handleInput} value="+">+</button>
            <button id="one" onClick={this.handleInput} value="1">1</button>
            <button id="two" onClick={this.handleInput} value="2">2</button>
            <button id="three" onClick={this.handleInput} value="3">3</button>
            <button id="decimal" onClick={this.handleInput} value=".">.</button>
            <button id="zero" className="jumbo" onClick={this.handleInput} value="0">0</button>
            <button id="equals" style={{ backgroundColor: '#1c4467' }} onClick={this.handleInput} value="=" className="jumbo">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


/**
 *
function Calculate(arr) {
  let currentValue = 0;
  let currentOperator = '+'
  arr.map(value => {
    if(Number.isInteger(value)) {
      currentValue = Operators[currentOperator](currentValue, value)
    } else currentOperator = value
  })
  return [...arr, currentValue]
}

const Operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}
const arr = [12, '+', 13, '*', '-', 2, '=']
const output = Calculate(arr)
console.log(output)
 */

/*
function gen(arr) {
  let currentValue = 0;
  let result = []
  arr.map(value => {
    if(Number.isInteger(value)){
      currentValue = parseFloat(currentValue + value.toString());
    }
    else {
      if(currentValue !== 0) result = [...result, currentValue];
      if(!Number.isInteger(result[result.length - 1]))
        result[result.length - 1] = value
      else result = [...result, value]
      currentValue = 0
    }
  })
  return result;
}


const arr = [1,2,3,'+',2,3,'*','-',3, '=']

const output = gen(arr);

console.log(output);
*/