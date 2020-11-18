import React from 'react';

import Item from './components/Item';

const Costs = ({costs, deleteItem}) => {
    return (
        <div className="costs">
            <h5>Wydatki</h5>
            {costs.map(cost => (
                <Item
                    key={`cost-${cost.id}`}
                    id={cost.id}
                    name={cost.name}
                    category={cost.category}
                    amount={cost.amount}
                    deleteItem={deleteItem}
                    type={cost.type}
                />))
            }
                    {/* TODO przekazywanie do props całego obiektu z .map*/}
        </div>
    );
}

export default Costs;