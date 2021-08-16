import React from 'react';
import './App.css';
 
  let array = [12, '+' , 13, '-', 1, '-', 2, '*', 2, '='];
  let operand = [];
  let operator = []
  let results = '';

  for(var i=0 ; i<array.length; i++){
     if(isNaN(array[i])){
      operator.push(array[i])
     }
     else{
      operand.push(array[i])
     }
    }
    
    for(i=0; i<operator.length; i++){
      switch(operator[i]){
        case '+':
          results = operand[i] + operand[i+1];
          operand[i+1] = results;
          break;
        case '-':
          results = operand[i] - operand[i+1];
          operand[i+1] = results;
          break;
        case '*':
          results = operand[i] * operand[i+1];
          operand[i+1] = results;
          break;
        case '/':
          results = operand[i] / operand[i+1];
          operand[i+1] = results;
          break;
        default:
          results = operand[i];
        }
      }
      array.push(results);
      
      console.log(operand);
      console.log(operator);
      console.log(results);
      console.log(array);


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "0",
      formula: [],

    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleInput(e){
    let newInput = e.target.value;
    console.log(newInput)
    this.setState(state => ({
      input: parseFloat(state.input + newInput.toString()).toString(),
      formula: parseFloat(state.input + newInput.toString()).toString(),
      
    }))

  }
  handleClear(){
    this.setState({ input: 0, formula: '' })
  }
  

  render(){
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
          <div className="formulaScreen">{this.state.formula}</div>
          <div className="outputScreen" id="display">{this.state.input}</div>
          
          <div id="number-plate">
            <button id="clear" className="jumbo" onClick={this.handleClear}>AC</button>
            <button id="divide" onClick={this.handleInput} value="/">/</button>
            <button id="multiply" onClick={this.handleInput} value="x">x</button>
            <button id="seven" onClick={this.handleInput} value="7">7</button>
            <button id="eight" onClick={this.handleInput} value="8">8</button>
            <button id="nine" onClick={this.handleInput} value="9"> 9</button>
            <button id="subtract" onClick={this.handleInput}  value="-">-</button>
            <button id="four" onClick={this.handleInput}  value="4">4</button>
            <button id="five" onClick={this.handleInput}  value="5">5</button>
            <button id="six" onClick={this.handleInput} value="6">6</button>
            <button id="add" onClick={this.handleInput} value="+">+</button>
            <button id="one" onClick={this.handleInput} value="1">1</button>
            <button id="two" onClick={this.handleInput} value="2">2</button>
            <button id="three" onClick={this.handleInput}  value="3">3</button>
            <button id="decimal" onClick={this.handleInput}  value=".">.</button>
            <button id="zero" className="jumbo" onClick={this.handleInput}  value="0">0</button>
            <button id="equals" style={{backgroundColor: '#1c4467'}} className="jumbo">=</button>
          </div>
      </div>
    </div>
  );
  }
}

export default App;
