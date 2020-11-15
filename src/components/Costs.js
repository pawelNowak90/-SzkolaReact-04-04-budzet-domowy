import React from 'react';

import Item from './components/Item';

const Costs = () => {
    return (
        <div className="costs">
            <h5>Wydatki</h5>
            <Item content={"Majtki"}/>
            <Item content={"Benzyna"}/>
            <Item content={"Kwiaty dla żony"}/>
        </div>
    );
}

export default Costs;