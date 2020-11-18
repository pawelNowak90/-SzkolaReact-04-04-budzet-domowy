import React from 'react';

const BtnDelete = ({deleteItem, itemId, type}) => {
    const myStyles = {lineHeight:"0.8"};
    return (
        <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(itemId, type)}
            style={myStyles}
    >X</button>
    );
}

export default BtnDelete;