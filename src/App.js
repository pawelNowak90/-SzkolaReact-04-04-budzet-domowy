import React, { Component } from 'react';
import './App.css';
import FormAddExpense from './components/FormAddExpense';
import Costs from './components/Costs';
import Income from './components/Income';
import Score from './components/Score';

class App extends Component {
  state = { 
      balance:-100,
   }

  render() {
    return (
      <div className="App">
        <header className="mt-2"><h5>04-04 - Kalkulator wydatków</h5></header>
        <div className="container">
          <div className="row">
            <div className="col-md-4 border py-2 bg-light">
              <FormAddExpense/>
            </div>
            <div className="col-md-4 border py-2 bg-light">
              <Costs/>
            </div>
            <div className="col-md-4 border py-2 bg-light">
              <Income/>
            </div>
          </div>
          <div className="row">
              <div className="col-6 offset-3">
                  <Score balance={this.state.balance}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
