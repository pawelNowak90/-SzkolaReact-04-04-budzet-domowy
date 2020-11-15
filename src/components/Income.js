import React from 'react';

import Item from './components/Item';

const Income = () => {
    return (
        <div className="income">
            <h5>Dochody</h5>
            <Item content={"500 +"}/>
            <Item content={"Pensja"}/>
            <Item content={"Działalność gospodarcza"}/>
        </div>
    );
}

export default Income;