import React, { Component} from 'react';

import data_categories from '../data/categories.json';
import './FormAddExpense.css';

class FormAddExpense extends Component {
constructor(props){
    super(props)
    //zmienic nazwe refów do czyszczenia
    this.isCostsInput = React.createRef();
    this.isIncomesInput = React.createRef();
    this.clearSelectInput = React.createRef();
}
    state = {
		id:100,
		name:'',
		income:false,
        cost:false,
		category:'',
        amount:'',
        type:'',
    }
    categories = [];

    handleSubmit = (e) => {
        e.preventDefault();
        //VALIDATE
        // THEN .PUSH
        const {name, category, amount, income, cost} = this.state;
        if(name && category && amount && (income || cost)){
            if(this.state.cost===true){         // TODO - zastąpić dwa ify czymś zagrabniejszym, jakiś pomysł ?
                let newCosts = [...this.props.costs];
                newCosts.push(this.state);
                this.props.changeCosts(newCosts);
            }
            if(this.state.income===true){
                let newIncome = [...this.props.incomes];
                newIncome.push(this.state);
                this.props.changeIncomes(newIncome);
            }
            this.handleReset();
        } else{
            alert('uzupełnij wszystkie pola formularza')
        }
    }

	handleReset = ()=>{
		this.setState({
			id:this.state.id+1,
			name:'',
			income:false,
			cost:false,
			category:'',
			amount:'',
        })
        this.isCostsInput.current.checked=false;
        this.isIncomesInput.current.checked=false;
        this.clearSelectInput.current.value="";
	}

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value})
        if (e.target.type==="radio"){
            if (e.target.id==="costs"){
				this.setState({cost:true,income:false,type:e.target.id})
			}
			if (e.target.id==="incomes"){
				this.setState({cost:false,income:true,type:e.target.id})
			}
            this.categories = data_categories[e.target.id];  //ZOBACZYC - praca na jsonie bez parsowania, czy tak można ?
        }
            // this.setState({[e.target.id]:e.target.checked})  //wcześniejszy automat z błędem
        }   //TODO zmiana stanu przy input RADIO jest napisana bardzo manualnie !!??

    render() {
        const {name, amount, category, cost, income} = this.state;
        return (
        <div className="form-add-expense">
            <h5>Dodaj pozycję</h5>
            <form action="" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div>
                        <div className="form-check">
                            <input onClick={this.handleChange} className="form-check-input" type="radio" name="gender" id="costs" ref={this.isCostsInput}/>
                            <label htmlFor="cost">WYDATEK</label>
                        </div>
                        <div className="form-check">
                            <input onClick={this.handleChange} className="form-check-input" type="radio" name="gender" id="incomes" ref={this.isIncomesInput}/>
                            <label htmlFor="income">PRZYCHÓD</label>
                        </div>
                    </div>
                    <div className="form-control mt-2 text-left">
                        <label htmlFor="name">Nazwa:</label>
                        <input onChange={this.handleChange} type="text" name="name" id="name" value={name}/>
                    </div>
                    <div className="form-control mt-2 text-left">
                        <label htmlFor="amount">Kwota w zł:</label>
                        <input onChange={this.handleChange} type="number" step="0.01" min="0" name="amount" id="amount" value={amount}/>
                        </div>
                    <div className="form-control mt-2 text-left">
                        <label htmlFor="category">Kategoria:</label>
                        <select onChange={this.handleChange} name="category" id="category" ref={this.clearSelectInput}>
                            <option value="" disabled selected> kategoria</option>
                            {this.categories.map((item, key) => ( <option id="category" key={key} value={item}> {item} </option>))}
                        </select>
                    </div>
                    <button className="btn btn-primary mt-2" type="submit">Dodaj pozycję do budżetu</button>
                </div>
			{/* <p>income: {income ? "true" : "false"}</p>
            <p>cost: {cost ? "true" : "false"}</p>
            <p>name: {name}</p>
            <p>amount: {amount}</p>
            <p>category: {category}</p> */}
            </form>
        </div>
        );
    }
}

export default FormAddExpense;
