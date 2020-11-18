import React from 'react';

const Score = ({balance}) => {
    // const debitWarningColor = {color:{balance ? '#0a0' : '#a00'}}         TODO - operator twój argumwentowy w styles, nie działa - TO NA POTEM POTEM !!??!!??
    return (
    // <h1>Saldo budżetu domowego: <span style={debitWarningColor}> {balance} </span> </h1>
    // <h1>Saldo budżetu domowego: <span style={{color: {balance ? 'red' : 'green'} }}> {balance} </span> </h1>
    <h3>Saldo budżetu domowego: <span style={{color: '#F00'}}> {balance} </span> </h3>
    );
}

export default Score;