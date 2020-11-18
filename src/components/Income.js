import React from 'react';

import Item from './components/Item';

const Income = ({incomes, deleteItem}) => {
    return (
        <div className="income">
            <h5>Dochody</h5>
            {incomes.map(income => (
                <Item
                    key={`income-${income.id}`}
                    id={income.id}
                    name={income.name}
                    category={income.category}
                    amount={income.amount}
                    deleteItem={deleteItem}
                    type={income.type}
                />))
            }
        </div>
    );
}

export default Income;