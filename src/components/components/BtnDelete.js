import React from 'react';

const BtnDelete = () => {
    const myStyles = {lineHeight:"0.8"};
    return (
        <button
            type="button"
            className="btn btn-danger"
            onClick={()=>console.log('DELETE THIS ITEM')}
            style={myStyles}
            >X</button>
    );
}

export default BtnDelete;