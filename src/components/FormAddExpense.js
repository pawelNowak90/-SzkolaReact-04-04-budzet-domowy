import React, { Component } from 'react';

import './FormAddExpense.css';

class FormAddExpense extends Component {
    state = {
        income:true,
        expenses:false,
        content:'',
        category:'',
        amount:'',
    }

    render() {
        return (
            <div className="form-add-expense">
            <h5>Dodaj pozycję</h5>
        </div>
        );
    }
}

export default FormAddExpense;
