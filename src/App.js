import React, { Component } from 'react';
import './App.css';
import FormAddExpense from './components/FormAddExpense';
import Costs from './components/Costs';
import Income from './components/Income';
import Score from './components/Score';

class App extends Component {
  state = {
      balance:-100,
      costs: [
        { id:0,
          name:'majtki',
          income:false,
          cost:true,
          category:'ubrania',
          amount:'80',
          type:'costs',
        },
        { id:1,
        name:'pomidory',
        income:false,
        cost:true,
        category:'spozywcze',
        amount:'33',
        type:'costs',
      },
      { id:2,
        name:'torba',
        income:false,
        cost:true,
        category:'ubrania',
        amount:'29',
        type:'costs',
      },],
      incomes: [
        { id:0,
          name:'500+',
          income:false,
          cost:true,
          category:'swiadczenia',
          amount:'500',
          type:'incomes',
        },
        { id:1,
        name:'pensja',
        income:false,
        cost:true,
        category:'etat',
        amount:'3333',
        type:'incomes',
      }]
   }
    changeCosts = (newArray)=>{
      this.setState({costs:newArray})
    }
    deleteItem = (itemId, type) => { //TODO - rozwiązanie wymaga ujednolicenia/UNIFICATION
      if(type==="costs"){
        let costs = [...this.state.costs].filter((cost) => {return cost.id!==itemId});
        this.setState({costs});
      }
      if(type==="incomes"){
        let incomes = [...this.state.incomes].filter((income) => {return income.id!==itemId});
        this.setState({incomes});
      }
    }
    changeIncomes = (newArray)=>{
      this.setState({incomes:newArray})
    }
  render() {
    const {costs, incomes} = this.state;
    return (
      <div className="App">
        <header className="mt-2"><h5>04-04 - Kalkulator wydatków</h5></header>
        <div className="container">
          <div className="row">
            <div className="col-md-4 border py-2 bg-light">
              <FormAddExpense costs={costs} incomes={incomes} changeCosts={this.changeCosts} changeIncomes={this.changeIncomes}/>
            </div>
            <div className="col-md-4 border py-2 bg-light">
              <Costs costs={costs} deleteItem={this.deleteItem}/>
            </div>
            <div className="col-md-4 border py-2 bg-light">
              <Income incomes={incomes} deleteItem={this.deleteItem}/>
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
