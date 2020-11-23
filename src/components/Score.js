import React from 'react';

const Score = ({totalCost, totalIncome}) => {
    let balance= totalIncome - totalCost ;
    return (
        <h3>Saldo budżetu domowego: <span style={ { color: !balance ? 'red' : 'green' } }> {balance} </span> </h3>
        // <h3>Saldo budżetu domowego: <span style={ !balance ? {color:'red'} : {color:'green'} }> {balance} </span> </h3> // trochę inaczej
        );
}

export default Score;